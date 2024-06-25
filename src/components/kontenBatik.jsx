import React, { useState, useEffect } from 'react';
import { fetchData } from '../api'; 

function KontenMembatik() {
  const [kontenMembatik, setKontenMembatik] = useState([]);

  useEffect(() => {
    const fetchKontenMembatik = async () => {
      try {
        const data = await fetchData('http://210.79.191.157:5000/api/kontenmembatik'); 
        setKontenMembatik(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchKontenMembatik();
  }, []);

  return (
    <section id="konten" className="mt-0 px-4 py-20 bg-white shadow-md relative">
      <div className="konten-container">
        <div className="header-konten mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">Konten Membatik</h1>
        </div>
        <div className="konten-cards grid grid-cols-1 md:grid-cols-3 gap-6">
          {kontenMembatik.map((konten, index) => (
            <div key={index} className="konten-card bg-[#314E52] rounded-lg p-6 text-white flex flex-col justify-between">
              <div className="konten-info">
                <h2 className="konten-name text-3xl mb-4">{konten.title}</h2>
                <p className="konten-description">{konten.description}</p>
              </div>
              <div className="image-container mt-4">
                <img 
                  src={`http://210.79.191.157:5000${konten.src}`} 
                  alt={konten.title} 
                  className="w-full rounded-lg" 
                />
              </div>
              <p className="text-xs mt-2">Sumber: <a href={konten.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{konten.sourceUrl}</a></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KontenMembatik;
