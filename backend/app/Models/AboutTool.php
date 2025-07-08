<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutTool extends Model
{
    protected $fillable = ['about_id', 'icon', 'title'];

    public function about()
    {
        return $this->belongsTo(About::class);
    }
}
