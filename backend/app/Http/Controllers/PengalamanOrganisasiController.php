<?php

namespace App\Http\Controllers;
use App\Models\PengalamanOrganisasi;

use Illuminate\Http\Request;

class PengalamanOrganisasiController extends Controller
{
    public function index()
    {
        $pengalamanOrganisasi = PengalamanOrganisasi::all();
        return response()->json($pengalamanOrganisasi);
    }
}
