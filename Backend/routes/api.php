<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClientController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\ScholarshipController;
use App\Http\Controllers\API\ApplicationController;
use App\Http\Controllers\API\ResumeController;
use App\Http\Controllers\API\HomepageController;
use App\Http\Controllers\API\OrganizationController;
use App\Http\Controllers\Api\AboutUsController;
use App\Http\Controllers\Api\TeamController;




Route::post('/register', [ClientController::class, 'register']);
Route::post('/login', [ClientController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout',[ClientController::class,'logout']);
    Route::get('/profile', [ClientController::class, 'profile']);
    Route::post('/profile/update', [ClientController::class, 'updateProfile']);
    Route::post('/cv/generate', [ResumeController::class, 'createOrUpdate']);
    Route::get('/cv/show', [ResumeController::class, 'show']);
});

Route::get('job/list',[JobController::class, 'list']);
Route::get('job/detail/{id}',[JobController::class, 'detail']);
Route::get('/organization-addresses', [JobController::class, 'getAddress']);


Route::get('scholarship/list',[ScholarshipController::class, 'list']);
Route::get('scholarship/detail/{id}',[ScholarshipController::class, 'detail']);

Route::post('application/store', [ApplicationController::class, 'store']);

Route::get('homepage',[HomepageController::class, 'index']);
Route::get('urgent/job',[HomepageController::class, 'ListUrgentJobs']);

Route::get('organization/list',[OrganizationController::class, 'list']);
Route::get('organization/detail/{id}',[OrganizationController::class, 'detail']);
Route::get('/organization/list/all', [OrganizationController::class, 'listAll']);

Route::get('about-us', [AboutUsController::class, 'index']);
Route::get('team-members', [TeamController::class, 'index']);