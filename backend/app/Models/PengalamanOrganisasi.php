<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PengalamanOrganisasi extends Model
{
    use HasFactory;

    protected $table = 'pengalaman_organisasi';

    protected $fillable = [
        'nama_organisasi',
        'peran',
        'lokasi',
        'tanggal_mulai',
        'tanggal_berakhir',
        'deskripsi',
        'photo_url',
    ];
}
