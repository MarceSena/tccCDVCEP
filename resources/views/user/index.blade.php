@extends('templates.template')
@section('content')

    @csrf
    <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
    </tr>
  </thead>
  <tbody>
    @foreach($user as $users)

        <tr>
            <th scope="row">{{$users->id}}</th>
            <td>{{$users->name}}</td>
            <td>
                <a href="{{url("user/$users->id")}}" class="">
                <button class="btn btn-dark btn-lg ">Read</button>
                </a>
                <a href="{{url("user/$users->id/edit")}}" class="">
                <button class="btn btn-primary btn-lg ">Updade</button>
                </a>
                <a href="{{url("user/$users->id")}}" class="js-del">
                <button class="btn btn-danger btn-lg">Deletar</button>
                </a>
            </td>
    </tr>
    @endforeach

  </tbody>
</table>

@endsection
