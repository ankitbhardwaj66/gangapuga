@extends('layouts.ganga')

@section('content')
<main>
    <section class="parallax parallax_top" data-url="{{"storage/".setting('home.banner_pic')}}">
      <div class="container">
        <div class="col-xs-12 col-sm-offset-1 col-sm-10">
          <h2>{{$fill['banner_heading']}}</h2>
        </div>
      </div>		 
    </section>
    <section class="well1 bg1">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4 wow fadeInUp">
            <img class="img-border" src="{{"storage/".setting('home.pic1')}}" alt="">
            <h3><a href="{{url('services')}}">{{setting('home.heading1')}}</a></h3>
            <p>{{setting('home.description1')}}</p>
            <a class="btn" href="{{url('contact')}}">Book</a>
          </div>
          <div class="col-xs-12 col-sm-4 wow fadeInUp" data-wow-delay=".2s">
            <img class="img-border" src="{{"storage/".setting('home.pic2')}}" alt="">
            <h3><a href="{{url('services')}}">{{setting('home.heading2')}}</a></h3>
            <p>{{setting('home.description2')}}</p>
            <a class="btn" href="{{url('contact')}}">Book</a>
          </div>
          <div class="col-xs-12 col-sm-4 wow fadeInUp" data-wow-delay=".4s">
            <img class="img-border" src="{{"storage/".setting('home.pic3')}}" alt="">
            <h3><a href="{{url('services')}}">{{setting('home.heading3')}}</a></h3>
            <p>{{setting('home.description3')}}</p>
            <a class="btn" href="{{url('contact')}}">Book</a>
          </div>
        </div>
      </div>     
    </section>
    <section class="well2">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-xs-12 col-sm-4 tc">
            <img class="img-abs" src="{{"storage/".setting('home.pic4')}}" alt="">
          </div>
          <div class="col-xs-12 col-sm-8">
            <h4>{{setting('home.heading4')}}</h4>
            <h5>{{setting('home.sub_heading4')}}</h5>
            <p>{{setting('home.description4')}}</p>
            <a class="btn" href="{{url('about')}}">learn more</a>
          </div>
        </div>
      </div>     
    </section>
    <section class="well2 bg2">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-xs-12 col-sm-8">
            <h4>{{setting('home.heading5')}}</h4>
            <h5>{{setting('home.sub_heading5')}}</h5>
            <p>{{setting('home.description5')}}</p>
            <a class="btn" href="{{url('about')}}">learn more</a>
          </div>
          <div class="col-xs-12 col-sm-4 tc">
            <img class="img-circle" src="{{"storage/".setting('home.pic5')}}" alt="">
          </div>
        </div>
      </div>     
    </section>
    <section class="parallax" data-url="{{"storage/".setting('home.background_pic')}}">
      <div class="container">
        <div class="col-xs-12 col-sm-offset-1 col-sm-10">
          <h2>{{$fill['quote']}}</h2>
        </div>
      </div>     
    </section>
    {{--<section class="well3 bg2">
      <div class="container">
        <h2>Latest News </h2>
        <div class="row">
          @foreach($news as $n)
          <div class="col-xs-12 col-sm-4">
            <div class="date"><time datetime="2015-06-29">{{date('d-M-y',strtotime($n->created_at))}}</time></div>    
            <h6><a href="#">{{$n->heading}}</a></h6>
            <p>{{$n->para}}</p>
            {{--<a class="btn mt1" href="#">learn more</a>
          </div>
        @endforeach
          
        </div>
      </div>     
    </section>--}}
    <section class="well4">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 wow fadeInLeft ">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UnQXTiBKJyU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="col-xs-12 col-sm-6 wow fadeInRight">
            <h4 class="mt2">{{setting('home.heading6')}}</h4>
            <p>{{setting('home.description6')}}</p>
            <a class="btn mt1" href="{{url('about')}}">learn more</a>
          </div>
        </div>
      </div>     
    </section>
    {{--<section class="parallax" data-url="{{ url(str_replace('\\', '/', $fill['background_pic2'])) }}">
      <div class="container">
        <div class="col-xs-12 col-sm-offset-1 col-sm-10">
          <h2>{{$fill['quote2']}}</h2>
        </div>
      </div>     
    </section>
    <section class="bg1 well3">
      <div class="container">
        <h2>Gallery</h2>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <a data-fancybox-group="1" class="thumb img-border" href="images/page-1_img07_original.jpg">
              <img src="{{ url('ganga/images/page-1_img07.jpg') }}" alt="">
              <span class="thumb_overlay"></span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4">
            <a data-fancybox-group="1" class="thumb img-border" href="images/page-1_img08_original.jpg">
              <img src="{{ url('ganga/images/page-1_img08.jpg') }}" alt="">
              <span class="thumb_overlay"></span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4">
            <a data-fancybox-group="1" class="thumb img-border" href="images/page-1_img09_original.jpg">
              <img src="{{ url('ganga/images/page-1_img09.jpg') }}" alt="">
              <span class="thumb_overlay"></span>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <a data-fancybox-group="1" class="thumb img-border" href="images/page-1_img10_original.jpg">
              <img src="{{ url('ganga/images/page-1_img10.jpg') }}" alt="">
              <span class="thumb_overlay"></span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4">
            <a data-fancybox-group="1" class="thumb img-border" href="images/page-1_img11_original.jpg">
              <img src="{{ url('ganga/images/page-1_img11.jpg') }}" alt="">
              <span class="thumb_overlay"></span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4">
            <a data-fancybox-group="1" class="thumb img-border" href="images/page-1_img12_original.jpg">
              <img src="{{ url('ganga/images/page-1_img12.jpg') }}" alt="">
              <span class="thumb_overlay"></span>
            </a>
          </div>
        </div>
       {{-- <div class="btn-wrap">
                        <a href="#" class="btn">view all</a>
                      </div>
      </div>   
    </section>--}}
    {{--<section class="well5">
              <div class="container wow fadeInUp">
                  <blockquote class="quote">
                    <div class="quote_aside">
                      <img src="{{ url('ganga/images/page-1_img13.jpg') }}" alt="">
                    </div>
                    <div class="quote_cnt__no-flow">
                      <div class="quote_text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at.
                      </div>
                      <div class="quote_title">Maria Sander, a mother of four.</div>
                    </div>
                  </blockquote>
              </div>     
            </section>--}}
  </main>
@endsection