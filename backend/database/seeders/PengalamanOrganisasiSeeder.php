<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PengalamanOrganisasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pengalaman_organisasi')->insert([
            [
                'photo_url' => 'http://127.0.0.1:8000/gambar1.JPG',
                'nama_organisasi' => 'Informatics Study Club – Universitas Sulawesi Barat',
                'peran' => 'Anggota – Divisi Web',
                'tanggal_mulai' => Carbon::create('2024', '01', '01'),
                'tanggal_berakhir' => Carbon::now(),
                'deskripsi' => 'Aktif berkolaborasi dalam belajar dan praktik pengembangan web bersama anggota tim, membantu memperbarui konten website organisasi serta jadwal akademik dan pengumuman acara.',
            ],
            [
                'photo_url' => 'http://127.0.0.1:8000/gambar2.JPG',
                'nama_organisasi' => 'Informatics Study Club – Universitas Sulawesi Barat',
                'peran' => 'Anggota – Tim Kreatif',
                'tanggal_mulai' => Carbon::create('2024', '09', '01'),
                'tanggal_berakhir' => Carbon::now(),
                'deskripsi' => 'Mendesain konten visual untuk acara akademik, media sosial, dan promosi, berkolaborasi dalam pembuatan poster, slide presentasi, dan pengembangan media digital.',
            ],
            [
                'photo_url' => 'http://127.0.0.1:8000/gambar3.JPG',
                'nama_organisasi' => 'PKKMB – Universitas Sulawesi Barat',
                'peran' => 'Tim IT – Panitia Hari Orientasi Mahasiswa Baru',
                'tanggal_mulai' => Carbon::create('2024', '08', '01'),
                'tanggal_berakhir' => Carbon::create('2024', '08', '01'),
                'deskripsi' => 'Menangani persiapan teknis dan troubleshooting selama kegiatan orientasi mahasiswa baru, termasuk instalasi multimedia, koneksi internet, dan koordinasi perangkat.',
            ],
        ]);
    }
}
