<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    protected $fillable = [
        'photo_url', 'profile', 'university', 'program', 'semester',
        'gpa', 'courses', 'technical_skills', 'non_technical_skills'
    ];

    public function tools()
    {
        return $this->hasMany(AboutTool::class);
    }
}
