<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = ['email', 'instagram', 'linkedin', 'phone', 'photo_url'];

}
