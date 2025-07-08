<?php

namespace App\Http\Controllers;
use App\Models\About;

use Illuminate\Http\Request;

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
