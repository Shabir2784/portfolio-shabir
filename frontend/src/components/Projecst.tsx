// src/components/Projects.tsx
import React from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
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
  );
}