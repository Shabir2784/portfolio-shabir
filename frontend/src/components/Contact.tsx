import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

type Props = {
  profile: {
    email: string;
    instagram: string;
    linkedin: string;
    phone: string;
    photo_url: string;
  };
};

export default function Contact({ profile }: Props) {
  return (
    <section id="contact" className="bg-white d-flex flex-column align-items-center justify-content-center min-vh-100 text-center px-3">
      <img
        src={profile.photo_url}
        alt="Foto Shabir"
        className="rounded-circle shadow mb-4"
        style={{ width: '220px', height: '220px', objectFit: 'cover', objectPosition: 'top' }}
      />
      <h2 className="fw-bold mb-3">Kontak Saya</h2>
      <p className="mb-1">
        📧 Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <p className="mb-1">
        📷 Instagram: <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer">@{profile.instagram}</a>
      </p>
      <p className="mb-1">
        <FaLinkedin /> LinkedIn: <a href={`https://www.linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a>
      </p>
      <p className="mb-3">
        📞 Telepon/WA: <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">{profile.phone}</a>
      </p>
      <div className="d-flex justify-content-center gap-2 mt-3">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">Email Saya</a>
        <a href={`https://instagram.com/${profile.instagram}`} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} className="btn btn-success" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </section>
  );
}
