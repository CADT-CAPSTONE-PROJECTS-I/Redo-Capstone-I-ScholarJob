<?php

use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\ProfileController;
use App\Http\Controllers\Backend\AccountController;
use App\Http\Controllers\Backend\RoleController;
use App\Http\Controllers\Backend\PermissionController;
use App\Http\Controllers\Backend\JobController;
use App\Http\Controllers\Backend\ScholarshipController;
use App\Http\Controllers\Backend\OrganizationController;
use App\Http\Controllers\Backend\ClientController;
use App\Http\Controllers\Backend\DashboardController;
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

Route::get('/', function () {
    return view('welcome');
});

// In web.php or a routes file
Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard')->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::view('about', 'about')->name('about');

    Route::get('accounts', [UserController::class, 'index'])->name('accounts.index');
    Route::get('accounts/create', [UserController::class, 'create'])->name('accounts.create');
    Route::post('accounts/store', [UserController::class, 'store'])->name('accounts.store');
    Route::get('accounts/show/{id}', [UserController::class, 'show'])->name('accounts.show');
    Route::post('accounts/update/{id}', [UserController::class, 'update'])->name('accounts.update');
    Route::post('accounts/destroy/{id}', [UserController::class, 'destroy'])->name('accounts.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/client', [ClientController::class, 'index'])->name('clients.index');
Route::get('/client/create', [ClientController::class, 'create'])->name('clients.create');
Route::post('client/store', [ClientController::class, 'store'])->name('clients.store');
Route::get('client/show/{id}', [ClientController::class, 'show'])->name('clients.show');
Route::post('client/update/{id}', [ClientController::class, 'update'])->name('clients.update');
Route::post('client/destroy/{id}', [ClientController::class, 'destroy'])->name('clients.destroy');


Route::get('/permission', [PermissionController::class, 'index'])->name('permissions.index');
Route::get('/permission/create', [PermissionController::class, 'create'])->name('permissions.create');
Route::post('/permission/store', [PermissionController::class, 'store'])->name('permissions.store');
Route::get('/permission/show/{id}', [PermissionController::class, 'show'])->name('permissions.show');
Route::post('/permission/update/{id}', [PermissionController::class, 'update'])->name('permissions.update');
Route::post('/permission/destroy/{id}', [PermissionController::class, 'destroy'])->name('permissions.destroy');


Route::get('/role', [RoleController::class, 'index'])->name('roles.index');
Route::get('/role/create', [RoleController::class, 'create'])->name('roles.create');
Route::post('/role/store', [RoleController::class, 'store'])->name('roles.store');
Route::get('/role/show/{id}', [RoleController::class, 'show'])->name('roles.show');
Route::post('/role/update/{id}', [RoleController::class, 'update'])->name('roles.update');
Route::post('/role/destroy/{id}', [RoleController::class, 'destroy'])->name('roles.destroy');

Route::get('/job', [JobController::class, 'index'])->name('jobs.index');
Route::get('/job/create', [JobController::class, 'create'])->name('jobs.create');
Route::post('/job/store', [JobController::class, 'store'])->name('jobs.store');
Route::get('/job/show/{id}', [JobController::class, 'show'])->name('jobs.show');
Route::post('/job/update/{id}', [JobController::class, 'update'])->name('jobs.update');
Route::post('/job/destroy/{id}', [JobController::class, 'destroy'])->name('jobs.destroy');

Route::get('/scholarship', [ScholarshipController::class, 'index'])->name('scholarships.index');
Route::get('/scholarship/create', [ScholarshipController::class, 'create'])->name('scholarships.create');
Route::post('/scholarship/store', [ScholarshipController::class, 'store'])->name('scholarships.store');
Route::get('/scholarship/show/{id}', [ScholarshipController::class, 'show'])->name('scholarships.show');
Route::post('/scholarship/update/{id}', [ScholarshipController::class, 'update'])->name('scholarships.update');
Route::post('/scholarship/destroy/{id}', [ScholarshipController::class, 'destroy'])->name('scholarships.destroy');

Route::get('/organization', [OrganizationController::class, 'index'])->name('organizations.index');
Route::get('/organization/create', [OrganizationController::class, 'create'])->name('organizations.create');
Route::post('/organization/store', [OrganizationController::class, 'store'])->name('organizations.store');
Route::get('/organization/show/{id}', [OrganizationController::class, 'show'])->name('organizations.show');
Route::post('/organization/update/{id}', [OrganizationController::class, 'update'])->name('organizations.update');
Route::post('/organization/destroy/{id}', [OrganizationController::class, 'destroy'])->name('organizations.destroy');

Route::get('/application', [ApplicationController::class, 'index'])->name('applications.index');
Route::get('/application/create', [ApplicationController::class, 'create'])->name('applications.create');
Route::post('/application/store', [ApplicationController::class, 'store'])->name('applications.store');
Route::get('/application/show/{id}', [ApplicationController::class, 'show'])->name('applications.show');
Route::post('/application/update/{id}', [ApplicationController::class, 'update'])->name('applications.update');
Route::post('/application/destroy/{id}', [ApplicationController::class, 'destroy'])->name('applications.destroy');




require __DIR__.'/auth.php';