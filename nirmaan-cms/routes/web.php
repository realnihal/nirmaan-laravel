<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TeamsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\IntroPageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect('/login');
});


// Auth Routes
Route::get('/login', [AuthController::class, 'getLogin'])->name('login');
Route::post('/login', [AuthController::class, 'postLoginUser'])->name('login');
Route::get('/forget-password', [AuthController::class, 'getForgetPassword'])->name('forget-password');
Route::post('/logout', [AuthController::class, 'postLogout'])->name('logout');


// Dashboard Routes
Route::get('/dashboard', [DashboardController::class, 'getDashboard'])->name('dashboard');

//teams page
Route::get('/teams', [TeamsController::class, 'getTeams'])->name('teams');
Route::post('/teams', [TeamsController::class, 'addTeamMate'])->name('add.team.mate');
Route::post('/teams/{teamMateId}', [TeamsController::class, 'deleteTeamMate'])->name('delete.team.mate');

//home page 1
Route::get('/this_is_nirmaan', [IntroPageController::class, 'homePage1View'])->name('home.page1');
Route::post('/this_is_nirmaan', [IntroPageController::class, 'addEvent'])->name('add.event');
Route::post('/this_is_nirmaan/{eventId}', [IntroPageController::class, 'deleteEvent'])->name('delete.event');

//home page 5
Route::get('/they_are_talking', [IntroPageController::class, 'homePage5View'])->name('home.page5'); 
Route::post('/they_are_talking', [IntroPageController::class, 'addStory'])->name('add.story'); 
Route::post('/they_are_talking/{storyId}', [IntroPageController::class, 'deleteStory'])->name('delete.story');

//home page 6
Route::get('/what_happens', [IntroPageController::class, 'homePage6View'])->name('home.page6'); 
Route::post('/what_happens', [IntroPageController::class, 'addContent'])->name('add.content');
Route::post('/what_happens/{contentId}', [IntroPageController::class, 'deleteContent'])->name('delete.content');



Route::get('/settings', [DashboardController::class, 'getSettings'])->name('settings');
