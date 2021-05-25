<?php

use App\Http\Controllers\ProcessController;
use App\Http\Controllers\ValueController;
use App\Http\Controllers\SampleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resources([
    'process' => ProcessController::class,
    'value' => ValueController::class,
    'sample' => SampleController::class,
]);
