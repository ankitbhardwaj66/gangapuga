@extends('layouts.ganga')

@section('content') 
  <main>
    <section class="well2">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-8 wow fadeInLeft ">
            <h4>{{setting('about.heading1')}}</h4>
            <h5>{{setting('about.sub_heading1')}}</h5>
            <p>{{setting('about.description1')}}</p>
            {{--<a class="btn" href="#">learn more</a>--}}
          </div>
          <div class="col-xs-12 col-sm-4 wow fadeInRight">
            <img class="img-circle" src="{{"storage/".setting('about.pic1')}}" alt="">
          </div>
        </div>
      </div>     
    </section>
     <section class="well2 bg1">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4 wow fadeInUp">
            <img class="img-border" src="{{"storage/".setting('about.pic2')}}" alt="">
            <h3>{{setting('about.heading2')}}</h3>
            <p>{{setting('about.description2')}}</p>
          </div>
          <div class="col-xs-12 col-sm-4 wow fadeInUp" data-wow-delay=".2s">
            <img class="img-border" src="{{"storage/".setting('about.pic3')}}" alt="">
            <h3>{{setting('about.heading3')}}</h3>
            <p>{{setting('about.description3')}}</p>
          </div>
          <div class="col-xs-12 col-sm-4 wow fadeInUp" data-wow-delay=".4s">
            <img class="img-border" src="{{"storage/".setting('about.pic4')}}" alt="">
            <h3>{{setting('about.heading4')}}</h3>
            <p>{{setting('about.description4')}}</p>
          </div>
        </div>
      </div>     
    </section>
    <section class="parallax" data-url="{{url(str_replace('\\', '/', $fill['background_pic']))}}">
      <div class="container">
        <div class="col-xs-12 col-sm-offset-1 col-sm-10">
          <h2>{{$fill['quote']}}</h2>
        </div>
      </div>
    </section>
    {{--<section class="well3 bg1">
      <div class="container wow fadeInUp">
        <h2>Priest Services</h2>
        <div class="row">
          <div class="col-xs-12">
            <ul class="price-list">
              @foreach($poojas as $pooja)
              <li>
                <span class="price-list_item"><span class="fa fa-star"></span>{{$pooja->name}}</span>
                <span class="price-list_right">Rs.{{$pooja->price}}</span>
                <span class="dots">........................................................................................................................................................................................................................................................................</span>
              </li>
              @endforeach
            </ul>
          </div>
          
        </div>
      </div>     
    </section>--}}
    
  </main>
  @endsection