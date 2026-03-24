@extends('layouts.ganga')

@section('content')

<main>
  <section class="well2">
    <div class="container">
      <div class="row">
        {{--<div class="col-xs-12 col-sm-4 tc wow fadeInLeft ">
          <img class="img-circle" src="{{ url($fill['pic3']) }}" alt="">
        </div>--}}
        <div class="col-xs-12 col-sm-12 wow fadeInRight">
          {!!setting('service.para')!!}
         
        </div>
      </div>
    </div>
  </section>
    <section class="well2">
      <div class="container wow fadeInUp">
        <h4>Daily scheduled activities </h4>
        {{--<h5>Every Week these activity held at Gangotri Ji.</h5>--}}
     
        <table class="table stacktable">
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
              <th>Instructor  / Phone</th>
            </tr>
          </thead>
          <tbody>

          @foreach($activities as $activity)
         
            <tr>
             <td>{{date('h:i A',strtotime($activity->time))}}</td>
              <td>{{$activity->name}}</td>
              <td>{{$activity->instructor}} / +91 {{$activity->phone}}</td>
            </tr>
   
          @endforeach

          </tbody>
        </table>
      

          </tbody>
        </table>
      </div>
    </section>
    <section class="parallax" data-url="{{url(str_replace('\\', '/', $fill['background_pic'])) }}">
      <div class="container">
        <div class="col-xs-12 col-sm-offset-1 col-sm-10">
          <h2>{{$fill['quote']}}</h2>
        </div>
      </div>
    </section>
     <section class="well3 bg1">
      <div class="container wow fadeInUp">
        <h2>{{$fill['head']}}</h2>
        <div class="row">
          <div class="col-xs-12 col-sm-3">
            <img class="img-border" src="{{ url($fill['pic1']) }}" alt="">
          </div>
          <div class="col-xs-12 col-sm-3">
            <h3>{{$fill['heading1']}}</h3>
            <p>{!!$fill['description1']!!}</p>
            <a class="btn" href="{{url('contact')}}">Book</a>
          </div>
          <div class="col-xs-12 col-sm-3">
            <img class="img-border" src="{{ url($fill['pic2']) }}" alt="">
          </div>
          <div class="col-xs-12 col-sm-3">
            <h3>{{$fill['heading2']}}</h3>
            <p>{!!$fill['description2']!!}</p>
            <a class="btn" href="{{url('contact')}}">Book</a>
          </div>
        </div>
      </div>
    </section>

  </main>
  @endsection
