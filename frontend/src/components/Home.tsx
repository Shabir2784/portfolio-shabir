import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

type Props = {
  profile: {
    email: string;
    instagram: string;
    linkedin: string;
    phone: string;
    photo_url: string;
  };
};

export default function Home({ profile }: Props) {
  return (
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
          <div className="mt-3 d-flex flex-column flex-md-row flex-wrap gap-3 justify-content-center justify-content-md-start text-primary fw-semibold">
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
            <a
              href={`https://www.linkedin.com/in/${profile.linkedin}`}
              className="text-decoration-none d-flex align-items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> {profile.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
