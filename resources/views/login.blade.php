@extends('templates.template')

@section('content')
<div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Icon -->
      <div class="fadeIn first">
        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
      </div>

      <!-- Login Form -->
        <form  username="login" class=" POST" method="post" action="{{route('authenticate')}}">
            @csrf
            <div class="form-group mb-3">
                <input type="text" placeholder="username" id="username" class="form-control"  name="username" required
                    autofocus>
                @if ($errors->has('name'))
                <span class="text-danger">{{ $errors->first('username') }}</span>
                @endif
            </div>

            <div class="form-group mb-3">
                <input type="password" placeholder="Password" id="password" class="form-control" name="password" required>
                @if ($errors->has('password'))
                <span class="text-danger">{{ $errors->first('password') }}</span>
                @endif
            </div>

            <div class="form-group mb-3">
                <div class="checkbox">
                    <label>
                        <input type="checkbox"  username="remember"> Remember Me
                    </label>
                </div>
            </div>

            <div class="d-grid mx-auto">
                <button type="submit" class="btn btn-dark btn-block">Signin</button>
            </div>
        </form>

  @endsection
