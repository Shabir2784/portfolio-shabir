<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Profile;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Profile::create([
            'email' => 'shabir.a270804@gmail.com',
            'instagram' => 'shbir_1',
            'linkedin' => 'shabir-pastibisa',
            'phone' => '+62 853 9939 6595',
            'photo_url' => 'http://127.0.0.1:8000/foto.jpeg',
        ]);
    }
}
