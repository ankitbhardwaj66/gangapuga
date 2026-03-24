@extends('layouts.ganga')

@section('content') 
  <main>
    {{--<section class="map">
      <div id="google-map" class="map_model map_model_1"></div>
      <ul class="map_locations">
            <li data-x="-73.9874068" data-y="40.643180">
          <p>8901 Marmora Road, Glasgow, DO4 89GR.</p>
        </li>
      </ul>
    </section>--}}    
    <section class="well1 bg1">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <h2>Address</h2>
            <h5>Very Easy to locate</h5>
            <p>Before coming to our office do give a call first. We will arrenge you an appointment.</p>
            <address class="addr">
              <p>{!!setting('site.address')!!}</p>
              
              <dl>
                <dt>Telephone:</dt>
                <dd><a href="callto:{{setting('site.phone')}}">+91 {{setting('site.phone')}}</a></dd>
              </dl>
              
              <br>
              <p>E-mail: <a href="mailto:{{setting('site.email')}}">{{setting('site.email')}}</a></p>
            </address>
          </div>
          <div class="col-xs-12 col-sm-8">
            @if ($message = Session::get('success'))
            <h3>Thanks For contacting us. We will get back to you soon.</h3>
            @else
            <h2>Contact form</h2>
            <form class='mailform' method="post" id="demo-form"> 
              <input type="hidden" name="form-type" value="contact"/> 
              <fieldset> 
                  <label> 
                      <input type="text" required name="name" placeholder="Your Name*"/> 
                  </label> 
                  <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <label> 
                          <input type="email" required name="email" placeholder="Your Email" /> 
                      </label>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <label> 
                          <input type="text" required name="phone" placeholder="Your Phone Number*" /> 
                      </label>
                    </div>
                  </div>
                  <label> 
                      <textarea name="message" required placeholder="Your Message*"></textarea> 
                  </label> 
              </fieldset> 
              {{ csrf_field() }}
              <input type="hidden" name="recaptcha" id="recaptcha">
              <button class="btn" id="submit"  type="submit">SEND</button>
          </form>
          @endif 
          </div>
        </div>
      </div>     
    </section>
  </main>
  @endsection

  @push('css')
  <link rel="stylesheet" href="{{ url('ganga/css/mailform.css') }}">
  @endpush


  @push('script')
  <script src="https://www.google.com/recaptcha/api.js?render={{ config('services.recaptcha.sitekey') }}"></script>
  <script>
      $(document).ready(function(){
          $(".notification-info").click(function(){
              $(this).fadeOut(500);
          });
      });
  
      grecaptcha.ready(function() {
               grecaptcha.execute('{{ config('services.recaptcha.sitekey') }}', {action: 'register'}).then(function(token) {
                  if (token) {
                    document.getElementById('recaptcha').value = token;
                  }
               });
           });
  </script>
  
  @endpush