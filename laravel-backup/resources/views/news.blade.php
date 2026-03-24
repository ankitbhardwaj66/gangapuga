@extends('layouts.ganga')

@section('content')
<main>
    <section class="well2">
      <div class="container">
        <h4 class="wow fadeInLeft">{{$fill['heading1']}}</h4>
        <h5 class="wow fadeInLeft">{{$fill['sub_heading1']}}</h5>
        <div class="row">
          <div class="col-xs-12 col-sm-12 wow fadeInLeft ">
            <p class="text1">{!!$fill['description1']!!}</p>
          </div>
          {{--<div class="col-xs-12 col-sm-2 wow fadeInRight">
            <ul class="marked-list">
              <li><a href="#">February 2015</a></li>
              <li><a href="#">March 2015</a></li>
              <li><a href="#">April 2015</a></li>
              <li><a href="#">May 2015</a></li>
              <li><a href="#">June 2015</a></li>
              <li><a href="#">July 2015</a></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-2 wow fadeInRight" data-wow-delay=".2s">
            <ul class="marked-list">
              <li><a href="#">August 2015</a></li>
              <li><a href="#">September 2015</a></li>
              <li><a href="#">October 2015</a></li>
              <li><a href="#">November 2015</a></li>
              <li><a href="#">December 2014</a></li>
              <li><a href="#">February 2014</a></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-2 wow fadeInRight" data-wow-delay=".4s">
            <ul class="marked-list">
              <li><a href="#">March 2014</a></li>
              <li><a href="#">April 2014</a></li>
              <li><a href="#">May 2014</a></li>
              <li><a href="#">June 2014</a></li>
              <li><a href="#">July 2014</a></li>
              <li><a href="#">August 2014</a></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-2 wow fadeInRight" data-wow-delay=".6s">
            <ul class="marked-list">
              <li><a href="#">September 2014</a></li>
              <li><a href="#">October 2014</a></li>
              <li><a href="#">November 2014</a></li>
              <li><a href="#">December 2013</a></li>
            </ul>
          </div>--}}                  
        </div>
      </div>     
    </section>
    <section class="well3 bg1">
      <div class="container">
        <h2>Latest news & events</h2>
        <div class="row wow fadeInUp">

        @foreach($news as $n)
          <div class="col-xs-12 col-sm-4">
            <div class="date"><time datetime="2015-06-29">{{date('d-M-y',strtotime($n->created_at))}}</time></div>    
            <h6><a href="#">{{$n->heading}}</a></h6>
            <p>{!!$n->para!!}</p>
            {{--<a class="btn mt1" href="#">learn more</a>--}}
          </div>
        @endforeach
          
        </div>
      </div>     
    </section>
    <section class="parallax" data-url="{{ url(str_replace('\\', '/', $fill['background_pic'])) }}">
      <div class="container">
        <div class="col-xs-12 col-sm-offset-1 col-sm-10">
          <h2>{{$fill['quote']}}</h2>
        </div>
      </div>
    </section>
    <section class="well2">
      <div class="container wow fadeInUp">
        <h2>Latest videos</h2>
        <div class="row">
          @foreach ($videos as $video)
          <div class="col-xs-12 col-sm-4">
            {!!$video->link!!}
            {{--<a class="thumb img-border video fancybox.iframe" href="{{$fill['v1']}}">
              <img src="{{ url('ganga/images/page-4_img01.jpg') }}" alt="">
              <span class="thumb_overlay"></span>
            </a>--}}
          </div>
          @endforeach
          
         
        </div>
      </div>     
    </section>
  </main> 
  @endsection