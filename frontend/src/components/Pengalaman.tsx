import React from 'react';
import { FaBriefcase, FaUsers } from 'react-icons/fa'; // Menggunakan icon untuk memperindah tampilan
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';  // Pastikan ini juga diimpor


type PengalamanProps = {
  pengalamanKerja: any[];
  pengalamanOrganisasi: any[];
};

const Pengalaman: React.FC<PengalamanProps> = ({ pengalamanKerja, pengalamanOrganisasi }) => {
  // Gabungkan pengalaman kerja dan organisasi dalam satu array
  const pengalaman = [...pengalamanKerja, ...pengalamanOrganisasi];

  return (
    <section id="pengalaman" className="container my-5">
      <h2 className="text-center mb-4">Pengalaman Kerja dan Organisasi</h2>

      <VerticalTimeline>
        {pengalaman.length > 0 ? (
          pengalaman.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                backgroundColor: item.type === 'kerja' ? '#f4f4f4' : '#e9f7fd',
                boxShadow: 'none',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              date={`${item.tanggal_mulai} - ${item.tanggal_berakhir}`}
              icon={item.type === 'kerja' ? <FaBriefcase /> : <FaUsers />}
              iconStyle={{
                background: '#fff',
                color: '#000',
                fontSize: '1.5rem',
              }}
            >
              <h5 className="card-title">
                {item.nama_perusahaan || item.nama_organisasi}
              </h5>
              <p className="card-subtitle text-muted">{item.peran}</p>
              <p className="card-text">{item.deskripsi}</p>
              {item.photo_url && (
                <div className="mb-4">
                  <img
                    src={item.photo_url}
                    alt={`Foto Pengalaman ${index + 1}`}
                    className="img-fluid rounded-circle mb-3"
                    style={{
                      maxWidth: '150px',
                      height: 'auto',
                      marginBottom: '15px',
                      marginRight: '15px',
                    }}
                  />
                </div>
              )}
            </VerticalTimelineElement>
          ))
        ) : (
          <p>Pengalaman belum tersedia.</p>
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Pengalaman;
