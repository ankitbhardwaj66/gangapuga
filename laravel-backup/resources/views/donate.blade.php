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
            <h2>Donation</h2>
            <h5>Thanks for donating</h5>
            {!!setting('donation.para')!!}
          </div>
          <div class="col-xs-12 col-sm-8">
            @if ($message = Session::get('success'))
            <h3>Thanks For contacting us. We will get back to you soon.</h3>
            @else
            <h2>Fill Below form</h2>
            <form class='mailform' method="post" action="/pay"> 
              <input type="hidden" name="form-type" value="contact"/> 
              <fieldset> 
                  <label> 
                      <input type="text" required name="name" placeholder="Your Name*"/> 
                  </label> 
                  <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <label> 
                          <input type="email" required name="email" placeholder="Your Email*" /> 
                      </label>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <label> 
                          <input type="text" required name="phone" placeholder="Your Phone Number*" /> 
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <label> 
                          <input type="text" required name="for" placeholder="Donating for*" /> 
                      </label>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <label> 
                          <input type="number" required name="amount" placeholder="Amount*" /> 
                      </label>
                    </div>
                  </div>
              </fieldset> 
              {{ csrf_field() }}
              <button class="btn" id="submit"  type="submit">Donate</button>
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
  
  
  @endpush