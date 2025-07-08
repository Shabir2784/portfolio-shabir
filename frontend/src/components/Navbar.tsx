import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-navbar border-bottom">
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold" href="#">Shabir</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
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
  );
}
