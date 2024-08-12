<?php

use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\ProfileController;
use App\Http\Controllers\Backend\AccountController;
use App\Http\Controllers\Backend\RoleController;
use App\Http\Controllers\Backend\PermissionController;
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

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::view('about', 'about')->name('about');

    Route::get('users', [UserController::class, 'index'])->name('users.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




Route::get('/account', [AccountController::class, 'index'])->name('accounts.index');
Route::get('/account/create', [AccountController::class, 'create'])->name('accounts.create');


Route::get('/permission', [PermissionController::class, 'index'])->name('permissions.index');


Route::get('/role', [RoleController::class, 'index'])->name('roles.index');
Route::get('/role/create', [RoleController::class, 'create'])->name('roles.create');
Route::post('/role/store', [RoleController::class, 'store'])->name('roles.store');
Route::get('/role/show/{id}', [RoleController::class, 'show'])->name('roles.show');
Route::get('/role/update/{id}', [RoleController::class, 'update'])->name('roles.update');
Route::post('/role/destroy/{id}', [RoleController::class, 'destroy'])->name('roles.destroy');


// Route::resource('roles', RoleController::class);
// Route::resource('permissions', PermissionController::class);


require __DIR__.'/auth.php';