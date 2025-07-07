<?php

use Illuminate\Support\Facades\Route;
use App\Models\Project;
use App\Http\Controllers\ProjectController;


Route::get('/', function () {
    return view('welcome');
});
Route::get('/projects', [ProjectController::class, 'index']);


Route::get('/api/profile', function () {
    return [
        'linkedin' => 'shabir-pastibisa',
        'email' => 'shabir.a270804@gmail.com',
        'instagram' => 'shbir_1',
        'photo_url' => 'http://127.0.0.1:8000/foto.jpeg',
    ];
});


Route::get('/api/about', function () {
    return response()->json([
        'photo_url' => 'http://127.0.0.1:8000/foto.jpeg',
        "profile" => "Mahasiswa Informatika di Universitas Sulawesi Barat, saat ini memasuki semester 5. Aktif sebagai anggota Informatics Study Club dan bagian dari tim kreatif. Memiliki pengalaman dalam pengembangan proyek individu maupun kolaboratif, termasuk pembuatan website e-commerce ikan hias yang menyerupai fitur Shopee. Menguasai HTML, CSS, JavaScript, Laravel, React, serta pengalaman dalam pengembangan frontend-backend, UI/UX, dan version control dengan GitHub. Tertarik pada Fullstack Development, Software Engineering, dan solusi digital yang berdampak.",
        "education" => [
            "university" => "Universitas Sulawesi Barat",
            "program" => "Program Studi Teknik Informatika",
            "semester" => "4",
            "gpa" => "3.78 / 4.00",
            "courses" => "Pemrograman Web, Basis Data, Manajemen Basis Data, Framework Web Based, Algoritma & Struktur Data, UI/UX"
        ],
        "skills" => [
            "technical" => "HTML, CSS, JavaScript, Laravel, React, GitHub, Figma, Canva, CapCut, Notion, UI/UX",
            "nonTechnical" => "Kerja Sama Tim, Komunikasi, Problem Solving, Perhatian pada Detail, Kreativitas, Penerimaan Feedback, Adaptabilitas, Public Speaking"
        ],
        "tools" => [
            [ "icon" => "/icons/html.jpg", "title" => "HTML" ],
            [ "icon" => "/icons/css.jpg", "title" => "CSS" ],
            [ "icon" => "/icons/js.jpg", "title" => "JavaScript" ],
            [ "icon" => "/icons/react.jpg", "title" => "React" ],
            [ "icon" => "/icons/laravel.jpg", "title" => "Laravel" ],
            [ "icon" => "/icons/github.jpg", "title" => "GitHub" ],
            [ "icon" => "/icons/figma.png", "title" => "Figma" ],
            [ "icon" => "/icons/canva.jpg", "title" => "Canva" ],
            [ "icon" => "/icons/capcut.jpg", "title" => "CapCut" ],
            [ "icon" => "/icons/notion.jpg", "title" => "Notion" ],
            [ "icon" => "/icons/word.jpg", "title" => "Word" ],
            [ "icon" => "/icons/excel.jpg", "title" => "Excel" ],
            [ "icon" => "/icons/powerpoint.jpg", "title" => "PowerPoint" ]
        ]
    ]);
});

Route::get('projects', function () {
    return Project::all();
});
Route::get('/api/projects', function () {
    return response()->json([
        [
            'id' => 1,
            'title' => 'Website E-Commerce Ikan Hias',
            'description' => 'Platform jual beli ikan hias online berbasis Laravel. Dilengkapi dengan fitur autentikasi multi role, relasi antar tabel, transaksi, validasi form, serta fungsi CRUD untuk pengelolaan produk secara dinamis.
                                Tampilan dibuat responsif dengan Blade dan Bootstrap agar nyaman digunakan di berbagai perangkat.',
            'image_url' => 'http://127.0.0.1:8000/tokoIkan.png',
        ],
        [
            'id' => 2,
            'title' => 'UMKM Makanan Khas Mandar',
            'description' => 'Website promosi kuliner khas Mandar yang dibangun dengan Laravel. Mendukung manajemen produk UMKM, autentikasi multi peran, transaksi pesanan, validasi form, dan fitur CRUD untuk pengelolaan data yang efisien.',
            'image_url' => 'http://127.0.0.1:8000/umkmMandar.png',
        ],
        [
            'id' => 3,
            'title' => 'Website Portofolio Pribadi',
            'description' => 'Website Portofolio Pribadi adalah situs pribadi yang dibangun menggunakan Laravel dan React untuk menampilkan profil, proyek, serta keahlian secara rapi dan interaktif. Proyek ini mendukung tampilan responsif, integrasi API, dan validasi form untuk keperluan presentasi diri secara profesional.',
            'image_url' => 'http://127.0.0.1:8000/portofolioPribadi.png',
        ],
    ]);
});

Route::get('/api/profile', function () {
    return response()->json([
        'email' => 'shabir.a270804@gmail.com',
        'instagram' => 'shbir_1',
        'linkedin' => 'shabir-pastibisa',
        'phone' => '+62 853 9939 6595',
        'photo_url' => 'http://127.0.0.1:8000/foto.jpeg',
    ]);
});
