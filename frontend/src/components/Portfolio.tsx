import React, { useEffect, useState } from 'react';
import About from './About';
import axios from 'axios';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
};

export default function Portfolio() {
  const [profile, setProfile] = useState({
    email: '',
    instagram: '',
    linkedin: '',
    phone: '',
    photo_url: '',
  });

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error('Gagal ambil data profil:', error));

    axios.get("http://127.0.0.1:8000/api/projects")
      .then(res => {
        console.log("Data proyek berhasil diambil:", res.data);
        setProjects(res.data);
      })
      .catch(err => {
        console.error("Gagal mengambil data proyek:", err);
      });
  }, []);;

  return (
      <div className="bg-white text-dark">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-navbar border-bottom">
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold" href="#">Shabir</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">Tentang</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Proyek</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Kontak</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container-fluid bg-white d-flex align-items-center min-vh-100">
  <div className="row align-items-center justify-content-center w-100 px-4">
    <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
      <img
        src={profile.photo_url}
        alt="Foto Shabir"
        className="img-fluid rounded shadow border"
        style={{ maxWidth: '220px', height: 'auto' }}
      />
    </div>
    <div className="col-12 col-md-8 text-center text-md-start">
      <h1 className="display-4 fw-bold text-uppercase">Student Portfolio</h1>
      <div className="mt-3 d-flex flex-column flex-md-row flex-wrap gap-3 text-primary fw-semibold">
        <a
          href={`mailto:${profile.email}`}
          className="text-decoration-none d-flex align-items-center gap-2"
        >
          <FaEnvelope /> {profile.email}
        </a>
        <a
          href={`https://instagram.com/${profile.instagram}`}
          className="text-decoration-none d-flex align-items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram /> @{profile.instagram}
        </a>
        <span className="d-flex align-items-center gap-2">
          <FaLinkedin /> {profile.linkedin}
        </span>
      </div>
    </div>
  </div>
</section>


      {/* About */}
      <About />

      {/* Projects */}
      <section id="projects" className="bg-white d-flex align-items-center min-vh-100">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Proyek Unggulan</h2>
          <div className="row justify-content-center">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
                  <div className="card shadow h-100">
                    <img
                      src={project.image_url}
                      className="card-img-top"
                      alt={project.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Proyek sedang dimuat...</p>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white d-flex flex-column align-items-center justify-content-center min-vh-100 text-center px-3">
        <img
          src={profile.photo_url}
          alt="Foto Shabir"
          className="rounded-circle shadow mb-4"
          style={{ width: '220px', height: '220px', objectFit: 'cover', objectPosition: 'top' }}/>
        <h2 className="fw-bold mb-3">Kontak Saya</h2>
        <p className="mb-1">
          📧 Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p className="mb-1">
          📷 Instagram: <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer">@{profile.instagram}</a></p>
        <p className="mb-1">
          🔗 LinkedIn: <a href={`https://www.linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
        <p className="mb-3">
          📞 Telepon/WA: <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">{profile.phone}</a></p>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">Email Saya</a>
          <a href={`https://instagram.com/${profile.instagram}`} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} className="btn btn-success" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-3 border-top">
        <div className="container-fluid">
          <small className="text-muted">&copy; {new Date().getFullYear()} Shabir. Portofolio.</small>
        </div>
      </footer>
    </div>
  );
}
