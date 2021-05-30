@extends('templates.template')
@section('content')
<form name="createUsers" class=" POST" method="post" action="{{url('user')}}">
@csrf
<label for="">Nome do Usuario</label>
<input class="form-control" type="text" name="username" id="username"  required value="{{$user->username ?? ''}}"></imput>
<label for="">senha</label>
<input class="form-control" type="password" name="password" id="password"  required value="{{$user->obs ?? ''}}"></imput>
<button type="submit" class="btn btn-primary btn-lg" value="">enviar</button>

</form>

@endsection
