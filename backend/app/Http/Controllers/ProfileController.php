<?php

namespace App\Http\Controllers;
use App\Models\Profile;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index()
    {
        return response()->json(Profile::first());
    }
}
