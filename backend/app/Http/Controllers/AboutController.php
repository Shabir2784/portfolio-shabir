<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;

class AboutController extends Controller
{
    public function index()
    {
        $about = About::with('tools')->first();

        return response()->json([
            'photo_url' => $about->photo_url,
            'profile' => $about->profile,
            'education' => [
                'university' => $about->university,
                'program' => $about->program,
                'semester' => $about->semester,
                'gpa' => $about->gpa,
                'courses' => $about->courses,
            ],
            'skills' => [
                'technical' => $about->technical_skills,
                'nonTechnical' => $about->non_technical_skills,
            ],
            'tools' => $about->tools->map(fn($tool) => [
                'icon' => $tool->icon,
                'title' => $tool->title,
            ]),
        ]);
    }
}
