<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::insert([
            [
                'title' => 'Website E-Commerce Ikan Hias',
                'description' => 'Platform jual beli ikan hias online berbasis Laravel. Dilengkapi dengan fitur autentikasi multi role, relasi antar tabel, transaksi, validasi form, serta fungsi CRUD untuk pengelolaan produk secara dinamis. Tampilan dibuat responsif dengan Blade dan Bootstrap agar nyaman digunakan di berbagai perangkat.',
                'image_url' => 'http://127.0.0.1:8000/tokoIkan.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'UMKM Makanan Khas Mandar',
                'description' => 'Website promosi kuliner khas Mandar yang dibangun dengan Laravel. Mendukung manajemen produk UMKM, autentikasi multi peran, transaksi pesanan, validasi form, dan fitur CRUD untuk pengelolaan data yang efisien.',
                'image_url' => 'http://127.0.0.1:8000/umkmMandar.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Website Portofolio Pribadi',
                'description' => 'Website Portofolio Pribadi adalah situs pribadi yang dibangun menggunakan Laravel dan React untuk menampilkan profil, proyek, serta keahlian secara rapi dan interaktif. Proyek ini mendukung tampilan responsif, integrasi API, dan validasi form untuk keperluan presentasi diri secara profesional.',
                'image_url' => 'http://127.0.0.1:8000/portofolioPribadi.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
