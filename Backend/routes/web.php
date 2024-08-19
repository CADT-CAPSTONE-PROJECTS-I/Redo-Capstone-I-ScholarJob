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

Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard')->middleware(['auth', 'verified']);

// Group routes that require authentication
Route::middleware('auth')->group(function () {
    Route::view('about', 'about')->name('about');

    // User Account Management Routes
    Route::prefix('accounts')->name('accounts.')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('index');
        Route::get('/create', [UserController::class, 'create'])->name('create');
        Route::post('/store', [UserController::class, 'store'])->name('store');
        Route::get('/show/{id}', [UserController::class, 'show'])->name('show');
        Route::post('/update/{id}', [UserController::class, 'update'])->name('update');
        Route::post('/destroy/{id}', [UserController::class, 'destroy'])->name('destroy');
    });

    // Profile Routes
    Route::prefix('profile')->name('profile.')->group(function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('destroy');
    });
});

// Client Routes
Route::prefix('client')->name('clients.')->group(function () {
    Route::get('/', [ClientController::class, 'index'])->name('index');
    Route::get('/create', [ClientController::class, 'create'])->name('create');
    Route::post('/store', [ClientController::class, 'store'])->name('store');
    Route::get('/show/{id}', [ClientController::class, 'show'])->name('show');
    Route::post('/update/{id}', [ClientController::class, 'update'])->name('update');
    Route::post('/destroy/{id}', [ClientController::class, 'destroy'])->name('destroy');
});

// Permission Routes
Route::prefix('permission')->name('permissions.')->group(function () {
    Route::get('/', [PermissionController::class, 'index'])->name('index');
    Route::get('/create', [PermissionController::class, 'create'])->name('create');
    Route::post('/store', [PermissionController::class, 'store'])->name('store');
    Route::get('/show/{id}', [PermissionController::class, 'show'])->name('show');
    Route::post('/update/{id}', [PermissionController::class, 'update'])->name('update');
    Route::post('/destroy/{id}', [PermissionController::class, 'destroy'])->name('destroy');
});

// Role Routes
Route::prefix('role')->name('roles.')->group(function () {
    Route::get('/', [RoleController::class, 'index'])->name('index');
    Route::get('/create', [RoleController::class, 'create'])->name('create');
    Route::post('/store', [RoleController::class, 'store'])->name('store');
    Route::get('/show/{id}', [RoleController::class, 'show'])->name('show');
    Route::post('/update/{id}', [RoleController::class, 'update'])->name('update');
    Route::post('/destroy/{id}', [RoleController::class, 'destroy'])->name('destroy');
});

// Job Routes
Route::prefix('job')->name('jobs.')->group(function () {
    Route::get('/', [JobController::class, 'index'])->name('index');
    Route::get('/create', [JobController::class, 'create'])->name('create');
    Route::post('/store', [JobController::class, 'store'])->name('store');
    Route::get('/show/{id}', [JobController::class, 'show'])->name('show');
    Route::post('/update/{id}', [JobController::class, 'update'])->name('update');
    Route::post('/destroy/{id}', [JobController::class, 'destroy'])->name('destroy');
});

// Scholarship Routes
Route::prefix('scholarship')->name('scholarships.')->group(function () {
    Route::get('/', [ScholarshipController::class, 'index'])->name('index');
    Route::get('/create', [ScholarshipController::class, 'create'])->name('create');
    Route::post('/store', [ScholarshipController::class, 'store'])->name('store');
    Route::get('/show/{id}', [ScholarshipController::class, 'show'])->name('show');
    Route::post('/update/{id}', [ScholarshipController::class, 'update'])->name('update');
    Route::post('/destroy/{id}', [ScholarshipController::class, 'destroy'])->name('destroy');
});

// Organization Routes
Route::prefix('organization')->name('organizations.')->group(function () {
    Route::get('/', [OrganizationController::class, 'index'])->name('index');
    Route::get('/create', [OrganizationController::class, 'create'])->name('create');
    Route::post('/store', [OrganizationController::class, 'store'])->name('store');
    Route::get('/show/{id}', [OrganizationController::class, 'show'])->name('show');
    Route::post('/update/{id}', [OrganizationController::class, 'update'])->name('update');
    Route::post('/destroy/{id}', [OrganizationController::class, 'destroy'])->name('destroy');
});

// Application Routes
Route::prefix('application')->name('applications.')->group(function () {
    Route::get('/', [ApplicationController::class, 'index'])->name('index');
    Route::get('/create', [ApplicationController::class, 'create'])->name('create');
    Route::post('/store', [ApplicationController::class, 'store'])->name('store');
    Route::get('/show/{id}', [ApplicationController::class, 'show'])->name('show');
    Route::post('/update/{id}', [ApplicationController::class, 'update'])->name('update');
    Route::post('/destroy/{id}', [ApplicationController::class, 'destroy'])->name('destroy');
});

require __DIR__.'/auth.php';