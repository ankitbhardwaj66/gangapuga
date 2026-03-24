<!DOCTYPE html>
<html lang="en">
<head>
  <title>@if($meta) {{$meta['title']}} @else {{setting('site.title')}} @endif</title>
  <meta name="keywords" content="@if($meta) {{$meta->keywords}} @else {{setting('site.keywords')}} @endif" />
	<meta name="description" content="@if($meta) {{$meta->description}} @else {{setting('site.description')}} @endif">
  <meta charset="utf-8">
  <meta name="format-detection" content="telephone=no"/>
  <meta name="robots" content="index, follow"/>
  <meta name="google-site-verification" content="fgVpZO9D23-TZn25WtBt6eexjCI70OLbfP9uZIGpaGs" />
  <link rel="canonical" href="{{Request::url()}}"/>
  <link rel="stylesheet" href="{{ url('ganga/css/grid.css') }}">
  <link rel="stylesheet" href="{{ url('ganga/css/google-map.css') }}">
  <link rel="stylesheet" href="{{ url('ganga/css/search.css') }}">
  <link rel="stylesheet" href="{{ url('ganga/css/subscribe-form.css') }}">
  <link rel="stylesheet" href="{{ url('ganga/css/jquery.fancybox.css') }}">
  <link rel="stylesheet" href="{{ url('ganga/css/style.css') }}">
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
 <link rel="icon" href="/favicon.ico" type="image/x-icon">
   @stack('css')
   
  <script src="{{ url('ganga/js/jquery.js') }}"></script>
  <script src="{{ url('ganga/js/jquery-migrate-1.2.1.js') }}"></script> 

  <!--[if lt IE 9]> 
  <html class="lt-ie9">
  <div style=' clear: both; text-align:center; position: relative;'>
    <a href="http://windows.microsoft.com/en-US/internet-explorer/..">
      <img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820"
           alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/>
    </a>
  </div>
  <script src="js/html5shiv.js"></script>
  <![endif]-->

  <script src='{{ url('ganga/js/device.min.js') }}'></script>
  <style>
    .float_watsapp {
    position: fixed;
    width: 100px;
    height: 65px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #FFF;
    border-radius: 27px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
    font-size: 17px;
    padding: 5px;
}
.my-float{
	margin-top:2px;
    font-size: 30px;
}
</style>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-164275863-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-164275863-1');
</script>

@stack('script')
</head>

<body>
  <a href="https://api.whatsapp.com/send?phone=919920813556&text=Jai Ganga Mayiya." class="float_watsapp" target="_blank">
    <span style="display: block;"> Lets Talk </span>  <i class="fa fa-whatsapp my-float"></i>
       </a>
<div class="page">
  <!--========================================================
                            HEADER
  =========================================================-->
  <header class="{{ Request::is( 'index') ? 'abs' : '' }}">
    <div id="stuck_container" class="stuck_container">
      <div class="container">
        <div class="brand">
          <h1 class="brand_name">
            <a href="{{url('/')}}"><img src="{{"storage/".setting('site.logo')}}" width="300"></a>
          </h1>
        </div>

        <div class="header-right">
          <nav class="nav">
            <ul class="sf-menu" data-type="navbar">
              <li class="{{ Request::is( 'index') ? 'active' : '' }}">
                <a href="{{url('/')}}"><span>Home</span></a>
              </li>
              <li class="{{ Request::is( 'about') ? 'active' : '' }}">
                <a href="{{url('about')}}"><span>About</span></a>
              </li>
              <li class="{{ Request::is( 'services') ? 'active' : '' }}">
                <a href="{{url('services')}}"><span>Services</span></a>
              </li>
              <li class="{{ Request::is( 'news') ? 'active' : '' }}">
                <a href="{{url('news')}}"><span>News & Events</span></a>
              </li>
              <li class="{{ Request::is( 'donate') ? 'active' : '' }}">
                <a href="{{url('donate')}}"><span>Donate</span></a>
              </li>
              <li class="{{ Request::is( 'conact') ? 'active' : '' }}">
                <a href="{{url('contact')}}"><span>Contacts</span></a>
              </li>
            </ul>
          </nav>

          {{--<a class="search-form_toggle" href="#"></a>

          <form class="search-form" action="search.php" method="GET" accept-charset="utf-8">
            <label class="search-form_label">
              <input class="search-form_input" type="text" name="s" autocomplete="off" placeholder="Search.."/>
              <span class="search-form_liveout"></span>
            </label>
            <button class="search-form_submit fa-search" type="submit"></button>
          </form>--}}
        </div>   
      </div>
    </div>

  </header>
  <!--========================================================
                            CONTENT
  =========================================================-->
  
  @yield('content')

  <!--========================================================
                            FOOTER
  =========================================================-->
  <footer>
    <section class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4">
           <h3>Credits</h3>
           {!!setting('site.credits')!!}
          </div>
          <div class="col-xs-12 col-sm-offset-1 col-sm-3">
            <h3>Find us</h3>
            <address class="addr">
              {!!setting('site.address')!!}
              
              <dl>
                <dt>Telephone:</dt>
                <dd><a href="callto:#">+91 {{setting('site.phone')}}</a></dd>
              </dl>
              
              <p class="addr_email">E-mail: <a href="mailto:#">{{setting('site.email')}}</a></p>
            </address>
          </div>
          <div class="col-xs-12 col-sm-4">
            <h3>Keep in touch</h3>
            <ul class="social-list">
              <li><a href="https://www.facebook.com/onlinegangapooja/"><span class="fa fa-facebook"></span></a></li>
              <li><a href="https://www.instagram.com/gangapujaonline/"><span class="fa fa-instagram"></span></a></li>
              <li><a href="https://www.youtube.com/channel/UC61_Xalv8nGcTcGf_qTcxmw"><span class="fa fa-youtube"></span></a></li>
              {{--<li><a href="#"><span class="fa fa-linkedin"></span></a></li>--}}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="footer-bottom">
      <div class="container">
        <p class="copy">© <span id="copyright-year"></span>  Online ganga pooja. Developed By <a href="https://ankitbhardwaj.in">Ankit Bhardwaj</a> </p>
        <!-- {%FOOTER_LINK} -->
      </div>
    </section>
    
  </footer>
</div>

<script src="{{ url('ganga/js/script.js') }}"></script>
</body>
</html>