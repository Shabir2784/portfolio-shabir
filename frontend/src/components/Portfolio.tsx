import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projecst';
import Contact from './Contact';
import Footer from './Footer';

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
    axios.get('http://127.0.0.1:8000/api/profile')
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
      <Navbar />

      {/* beranda */}
      <Home profile={profile} />

      {/* Tentang */}
      <About />

      {/* Projek */}
      <Projects projects={projects} />
      

      {/* kontak */}
      <Contact profile={profile} />

      {/* Footer */}
      <Footer />

    </div>
  );
}
