<?php



use App\Http\Controllers\ProcessController;
use App\Http\Controllers\SampleController;
use App\Http\Controllers\ProcessValueController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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


Route::get('/', [LoginController::class,  'login']);
Route::post('authenticate', [LoginController::class , 'authenticate'])->name('authenticate'); ;
Route::post('teste', [LoginController::class , 'teste']);



Route::resources([
    'process' => ProcessController::class,
    'value' => ProcessValueController::class,
    'sample' => SampleController::class,
    'user' => UserController::class
]);
