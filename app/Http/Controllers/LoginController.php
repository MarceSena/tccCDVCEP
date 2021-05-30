<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function teste(){
        if(Auth::check()===true){
            return dd('aqui sim entrou');
        }
        return dd('aqui não entrou');
    }

    public function login() {
        return view('login');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt( $credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('process');
        }

        return back()->withErrors([
            'username' => 'The provided credentials do not match our records.',
        ]);
    }
}
