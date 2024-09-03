<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClientController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\ScholarshipController;
use App\Http\Controllers\API\ApplicationController;



Route::post('/register', [ClientController::class, 'register']);
Route::post('/login', [ClientController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [ClientController::class, 'profile']);
    Route::put('/profile', [ClientController::class, 'updateProfile']);
});

Route::get('job/list',[JobController::class, 'list']);
Route::get('job/detail/{id}',[JobController::class, 'detail']);
Route::get('/organization-addresses', [JobController::class, 'getAddress']);


Route::get('scholarship/list',[ScholarshipController::class, 'list']);
Route::get('scholarship/detail/{id}',[ScholarshipController::class, 'detail']);


Route::post('applications/store', [ApplicationController::class, 'store']);