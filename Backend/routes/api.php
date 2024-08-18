<?php

use App\Http\Controllers\API\ClientController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [ClientController::class, 'register']);
Route::post('/login', [ClientController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [ClientController::class, 'profile']);
    Route::put('/profile', [ClientController::class, 'updateProfile']);
});