<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PengalamanKerjaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::table('pengalaman_kerja')->insert([
            [
                'nama_perusahaan' => 'BALITBANGREN',
                'peran' => 'Desainer Grafis',
                'lokasi' => 'Polewali Mandar, Sulawesi Barat',
                'tanggal_mulai' => Carbon::parse('2021-Jan-01'),
                'tanggal_berakhir' => Carbon::create('2022', '01', '13'),
                'deskripsi' => 'Mendesain 10+ materi visual untuk laporan, presentasi, dan media sosial instansi.',
                'photo_url' => 'http://127.0.0.1:8000/INFINITEC 14.png',

            ],
        ]);
    }
}
