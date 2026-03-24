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
          <div class="col-xs-12">
            <h2>Donation</h2>
            <h5>Thanks for donating.</h5>
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