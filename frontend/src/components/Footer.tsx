import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-center py-3 border-top">
      <div className="container-fluid">
        <small className="text-muted">
          &copy; {new Date().getFullYear()} Shabir. Portofolio.
        </small>
      </div>
    </footer>
  );
}
