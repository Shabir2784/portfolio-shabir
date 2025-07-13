<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\PengalamanKerjaController;
use App\Http\Controllers\PengalamanOrganisasiController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/api/profile', [ProfileController::class, 'index']);

Route::get('/api/projects', [ProjectController::class, 'index']);

Route::get('/api/about', [AboutController::class, 'index']);

Route::get('/api/pengalaman-kerja', [PengalamanKerjaController::class, 'index']);

Route::get('/api/pengalaman-organisasi', [PengalamanOrganisasiController::class, 'index']);

