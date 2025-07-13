<?php

namespace App\Http\Controllers;
use App\Models\PengalamanKerja;

use Illuminate\Http\Request;

class PengalamanKerjaController extends Controller
{
     public function index()
    {
        $pengalamanKerja = PengalamanKerja::all();
        return response()->json($pengalamanKerja);
    }
}
