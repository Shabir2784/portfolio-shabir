<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\About;
use App\Models\AboutTool;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $about = About::create([
            'photo_url' => 'http://127.0.0.1:8000/foto.jpeg',
            'profile' => 'Mahasiswa Informatika di Universitas Sulawesi Barat dengan pengalaman dalam pengembangan web individu dan tim. Terampil dalam HTML, CSS, JavaScript, Laravel, dan React, serta integrasi database dan UI/UX responsif. Aktif di Informatics Study Club dan Tim Kreatif sejak 2024. Terbiasa menggunakan GitHub, Figma, dan Canva untuk pengembangan proyek digital. Tertarik pada Fullstack Development dan solusi teknologi berdampak.',
            'university' => 'Universitas Sulawesi Barat',
            'program' => 'Program Studi Teknik Informatika',
            'semester' => '4',
            'gpa' => '3.78 / 4.00',
            'courses' => 'Pemrograman Web, Basis Data, Manajemen Basis Data, Framework Web Based, Algoritma & Struktur Data, UI/UX',
            'technical_skills' => 'HTML, CSS, JavaScript, Laravel, React, GitHub, Figma, Canva, CapCut, Notion, UI/UX',
            'non_technical_skills' => 'Kerja Sama Tim, Komunikasi, Problem Solving, Perhatian pada Detail, Kreativitas, Penerimaan Feedback, Adaptabilitas, Public Speaking'
        ]);

        $tools = [
            ['icon' => '/icons/html.jpg', 'title' => 'HTML'],
            ['icon' => '/icons/css.jpg', 'title' => 'CSS'],
            ['icon' => '/icons/js.jpg', 'title' => 'JavaScript'],
            ['icon' => '/icons/react.jpg', 'title' => 'React'],
            ['icon' => '/icons/laravel.jpg', 'title' => 'Laravel'],
            ['icon' => '/icons/github.jpg', 'title' => 'GitHub'],
            ['icon' => '/icons/figma.png', 'title' => 'Figma'],
            ['icon' => '/icons/canva.jpg', 'title' => 'Canva'],
            ['icon' => '/icons/capcut.jpg', 'title' => 'CapCut'],
            ['icon' => '/icons/notion.jpg', 'title' => 'Notion'],
            ['icon' => '/icons/word.jpg', 'title' => 'Word'],
            ['icon' => '/icons/excel.jpg', 'title' => 'Excel'],
            ['icon' => '/icons/powerpoint.jpg', 'title' => 'PowerPoint'],
        ];

        foreach ($tools as $tool) {
            $about->tools()->create($tool);
        }
    }
}
