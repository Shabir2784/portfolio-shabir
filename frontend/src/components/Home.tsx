import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



export default function Portfolio() {
  return (
    <div className="bg-white text-dark d-flex flex-column min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm">
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold" href="#">Shabir</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">Tentang</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Proyek</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container-fluid py-5 bg-white">
        <div className="row align-items-center justify-content-center px-4">
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/foto.jpeg"
              alt="Foto Shabir"
              className="img-fluid rounded shadow border"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </div>
          <div className="col-12 col-md-8 text-center text-md-start">
            <h1 className="display-4 fw-bold text-uppercase">Student Portfolio</h1>
            <div className="mt-3 d-flex flex-column flex-md-row flex-wrap gap-2 text-primary fw-semibold">
              <a href="mailto:shabir@email.com" className="text-decoration-none">📧 shabir@email.com</a>
              <a href="https://instagram.com/shabir.dev" className="text-decoration-none">📷 @shabir.dev</a>
              <span>💼 Shabir Putra</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Tentang Saya</h2>
          <p className="text-center mx-auto" style={{ maxWidth: '720px' }}>
            Mahasiswa Informatika di Universitas Sulawesi Barat yang antusias dalam pengembangan web modern, UI/UX design, dan solusi digital berdampak.
            Aktif di Informatics Study Club sebagai anggota tim kreatif dan divisi web.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Proyek Unggulan</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow h-100">
                <img src="https://via.placeholder.com/400x250" className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Website E-Commerce Ikan Hias</h5>
                  <p className="card-text">Proyek individu menyerupai Shopee, dengan fitur marketplace dasar. Menggunakan Laravel dan React.</p>
                </div>
              </div>
            </div>
            {/* Tambahkan proyek lain jika ada */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Kontak Saya</h2>
          <p>Email: <a href="mailto:shabir@email.com">shabir@email.com</a></p>
          <p>Instagram: <a href="https://instagram.com/shabir.dev">@shabir.dev</a></p>
          <p>LinkedIn: <a href="#">Shabir Putra</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-3 border-top mt-auto">
        <div className="container-fluid">
          <small className="text-muted">&copy; {new Date().getFullYear()} Shabir. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
