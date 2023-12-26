<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\TeamsApiController;
use App\Http\Controllers\EventsApiController;
use App\Http\Controllers\StoriesApiController;
use App\Http\Controllers\ContentaApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('teams', TeamsApiController::class);
Route::resource('events', EventsApiController::class);
Route::resource('stories', StoriesApiController::class);
Route::resource('contents', ContentaApiController::class);



Route::get('images/{path}', [ImageController::class,'show']);
