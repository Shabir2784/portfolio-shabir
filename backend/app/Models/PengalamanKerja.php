<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PengalamanKerja extends Model
{
    use HasFactory;

    protected $table = 'pengalaman_kerja';

    protected $fillable = [
        'nama_perusahaan',
        'peran',
        'lokasi',
        'tanggal_mulai',
        'tanggal_berakhir',
        'deskripsi',
        'photo_url',
    ];
}
