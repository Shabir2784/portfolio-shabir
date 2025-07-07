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
        Project::create([
            'title' => 'Website E-Commerce Ikan Hias',
            'description' => 'Proyek individu menyerupai Shopee, dengan fitur marketplace dasar. Menggunakan Laravel dan React.',
            'image_url' => 'https://via.placeholder.com/400x250'
        ]);

        Project::create([
            'title' => 'Website E-Commerce Produk UMKM Mandar',
            'description' => 'Platform digital untuk memasarkan produk-produk UMKM Mandar secara online. Dibangun dengan Laravel dan React.',
            'image_url' => 'https://via.placeholder.com/400x250'
        ]);
    }
}
