@extends('templates.template')
@section('content')

    @csrf 
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
    </tr>
  </thead>
  <tbody>
    @foreach($sample as $samples)
       
        <tr>
            <th scope="row">{{$samples->id}}</th>
           
    </tr>
    @endforeach
    
  </tbody>
</table>
   
@endsection
