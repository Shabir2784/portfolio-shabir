<?php

use Illuminate\Support\Facades\Route;
use App\Models\Project;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AboutController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/profile', [ProfileController::class, 'index']);


Route::get('/api/projects', [ProjectController::class, 'index']);

Route::get('/api/about', [AboutController::class, 'index']);



