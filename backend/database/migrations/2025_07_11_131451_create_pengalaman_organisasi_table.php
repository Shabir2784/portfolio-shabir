<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pengalaman_organisasi', function (Blueprint $table) {
            $table->id();
            $table->string('nama_organisasi');
            $table->string('peran');
            $table->date('tanggal_mulai');
            $table->date('tanggal_berakhir');
            $table->text('deskripsi');
            $table->string('photo_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengalaman_organisasi');
    }
};
