@extends('templates.template')
@section('content')
<form name="createProcess" class=" POST" method="post" action="{{url('process')}}">
@csrf
<label for="">Nome do processo</label>
<input class="form-control" type="text" name="name" id="name"  required value="{{$process->name ?? ''}}"></imput>
<label for="">Observação sobre o processo</label>
<input class="form-control" type="text" name="obs" id="obs"  required value="{{$process->obs ?? ''}}"></imput>
<button type="submit" class="btn btn-primary btn-lg" value="">enviar</button>

</form>

@endsection
