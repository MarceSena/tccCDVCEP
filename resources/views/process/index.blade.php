@extends('templates.template')
@section('content')

    
  

    @csrf 
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">OBS</th>
    </tr>
  </thead>
  <tbody>
    @foreach($process as $processes)
       
        <tr>
            <th scope="row">{{$processes->id}}</th>
            <td>{{$processes->name}}</td>
            <td>{{$processes->obs}}</td>
            <td>
                <a href="{{url("process/$processes->id")}}" class="">
                <button class="btn btn-dark btn-lg ">Read</button>
                </a>
                <a href="{{url("process/$processes->id/edit")}}" class="">
                <button class="btn btn-primary btn-lg ">Updade</button>
                </a>
                <a href="{{url("process/$processes->id")}}" class="js-del">
                <button class="btn btn-danger btn-lg">Deletar</button>
                </a>
            </td>
    </tr>
    @endforeach
    
  </tbody>
</table>
   
@endsection
