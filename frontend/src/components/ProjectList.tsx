import { useEffect, useState } from 'react';
import axios from 'axios';

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Gagal ambil data:', error));
  }, []);

  return (
    <section className="container py-5" id="projects">
      <h2 className="h3 mb-4">Proyek Saya</h2>
      <div className="row">
        {projects.map(project => (
          <div className="col-md-6 mb-4" key={project.id}>
            <div className="card h-100 shadow-sm">
              {project.image && <img src={project.image} className="card-img-top" alt={project.title} />}
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">Kunjungi</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
