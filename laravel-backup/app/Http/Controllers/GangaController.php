<?php

namespace App\Http\Controllers;
use App\Mail\ContactForm;
use App\Mail\DonationThanks;
use Illuminate\Http\Request;
use Mail;
use App\Http\Requests;
use GuzzleHttp\Client;
use App\Setting as Setting;
use App\Content as Content;
use App\Gallery as Gallery;
use App\Activity as Activity;
use App\News as News;
use App\Pooja as Pooja;
use Razorpay\Api\Api;

class GangaController extends Controller
{

    function index( Request $request)
    {
        $meta = \App\Meta::where('url',url()->current())->first();
        $content = Content::where('page','home')->get();
        foreach($content as $data)
        $fill[$data->name] = $data->value; 
        $news = News::all();
    	return view('index')->with(compact('fill','news','meta'));
    }

    function donate( Request $request)
    {
        $meta = \App\Meta::where('url',url()->current())->first();
    	return view('donate')->with(compact('meta'));
    }

    function services(Request $request)
    {
        $meta = \App\Meta::where('url',url()->current())->first();
        $content = Content::where('page','service')->get();
        foreach($content as $data)
        $fill[$data->name] = $data->value; 
        $poojas = Pooja::all();
        return view('services')->with(compact('fill','poojas','meta'));
    }

    function activities(Request $request)
    {
        $meta = \App\Meta::where('url',url()->current())->first();
    	$content = Content::where('page','poojas')->get();
        foreach($content as $data)
        $fill[$data->name] = $data->value;
        $activities = Activity::all();
        return view('activities')->with(compact('fill','activities','meta'));
    }

    function news(Request $request)
    {
        $meta = \App\Meta::where('url',url()->current())->first();
    	$content = Content::where('page','events')->get();
        foreach($content as $data)
        $fill[$data->name] = $data->value;
        $news = News::all(); 
        $videos = \App\Video::all();
        return view('news')->with(compact('fill','news','videos','meta'));
    }

    function pay(Request $request)
    {
        $donation = new \App\Donation;
        $donation->amount = $request->amount;
        $donation->name = $request->name;
        $donation->email = $request->email;
        $donation->phone = $request->phone;
        $donation->for = $request->for;
        $donation->save();

        $api = new Api('rzp_test_lv5v1ZW2w3ZOu3', 'CNpjA57LwKYRZ097sO0etC8T');
        $raz_order = $api->order->create(array(
            'receipt' => $donation->id,
            'amount' => $donation->amount*100,
            'currency' => 'INR'
            )
          );

        $donation->raz_id = $raz_order->id;
        $donation->save();

          return view('pay')->with(compact('donation','raz_order'));
    }

    function success(Request $request)
    {
        $meta = \App\Meta::where('url',url()->current())->first();
        $donation = \App\Donation::where('raz_id',$request->razorpay_order_id)->first();
        $donation->status = "success";
        $donation->save();
        Mail::to($donation->email)->send(new DonationThanks($donation));
        return view('success')->with(compact('meta'));
    }

    function contact(Request $request)
    {
        $meta = \App\Meta::where('url',url()->current())->first();
        if($request->input())
        {
            $url = 'https://www.google.com/recaptcha/api/siteverify';
            $remoteip = $_SERVER['REMOTE_ADDR'];
            $data = [
                    'secret' => config('services.recaptcha.secret'),
                    'response' => $request->get('recaptcha'),
                    'remoteip' => $remoteip
                ];
            $options = [
                    'http' => [
                    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                    'method' => 'POST',
                    'content' => http_build_query($data)
                    ]
                ];
            $context = stream_context_create($options);
            $result = file_get_contents($url, false, $context);
            $resultJson = json_decode($result);
            if ($resultJson->success != true) 
            {
                return back()->withErrors(['captcha' => 'ReCaptcha Error']);
            }
            
            if ($resultJson->score >= 0.3) 
            {
                Mail::to(setting('site.email'))->cc("add.diamonds@gmail.com")->send(new ContactForm($request->input()));
                return back()->with(['success' => 'Email sent']);
            } 
            else 
            {
                return back()->withErrors(['captcha' => 'ReCaptcha Error']);
            }
        }
        
    	return view('contact')->with(compact('request','meta'));
    }
}
