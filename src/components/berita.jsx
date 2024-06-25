import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BeritaSection() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://210.79.191.157:5000/api/berita');
        setBerita(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="berita" className="mt-10 px-4 sm:px-10 bg-white shadow-md">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">Berita Terkini</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {berita.map(item => (
          <div key={item.id} className="berita-card flex-1 max-w-300">
            <div className="image-berita text-center mb-3 p-0 bg-[#314E52] rounded-lg shadow-md">
              <img
                src={`http://210.79.191.157:5000/images/${item.image}`}
                alt={item.title}
                className="w-full h-auto rounded-lg"
                style={{ maxHeight: '300px' }}
              />
              <div className="description-berita p-3">
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <div className="date flex justify-between items-center text-white">
                  <span><i className="fas fa-calendar-alt mr-1"></i> {item.date}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <span><i className="fas fa-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BeritaSection;
