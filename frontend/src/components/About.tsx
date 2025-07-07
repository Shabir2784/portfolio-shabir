import React, { useEffect, useState } from 'react';
import './About.css';
import '../styles/animations.css';
import axios from 'axios';

export default function About() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/about')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-5">Sedang memuat data...</p>;
  }

  return (
    <section id="about" className="about-section container py-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={data?.photo_url}
            alt="Foto Shabir"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: '250px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-8">
          <h2 className="fw-bold mb-3">PROFIL</h2>
          <p>{data?.profile}</p>

          <h4 className="fw-bold mt-4">PENDIDIKAN</h4>
          <p className="mb-1"><strong>{data?.education?.university}</strong></p>
          <p className="mb-1">{data?.education?.program}</p>
          <ul>
            <li>Semester: {data?.education?.semester}</li>
            <li>IPK: {data?.education?.gpa}</li>
            <li>Mata Kuliah: {data?.education?.courses}</li>
          </ul>

          <h4 className="fw-bold mt-4">KEMAMPUAN</h4>
          <p><strong>Teknis:</strong> {data?.skills?.technical}</p>
          <p><strong>Non-Teknis:</strong> {data?.skills?.nonTechnical}</p>

          <h4 className="fw-bold mt-4">TOOLS YANG DIGUNAKAN</h4>
          <div className="d-flex flex-wrap gap-3 mt-2">
            {data?.tools?.map((tool: any, index: number) => (
              <img
                key={index}
                src={tool.icon}
                alt={tool.title}
                title={tool.title}
                style={{ width: '40px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
