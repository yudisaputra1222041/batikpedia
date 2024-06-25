import React, { useEffect, useState } from 'react';
import { fetchData } from '../api';
import Sejarah from '../assets/sejarah.png';

function SejarahBatik() {
  const [sejarah, setSejarah] = useState([]);
  const [landingData, setLandingData] = useState(null);

  useEffect(() => {
    fetchData('http://210.79.191.157:5000/api/sejarah')
      .then(data => {
        setSejarah(data.filter(item => item.title !== 'SEJARAH BATIK')); 
        const landing = data.find(item => item.title === 'SEJARAH BATIK');
        setLandingData(landing);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  if (!landingData) return null;

  return (
    <div className="bg-gray-100">
      <section id="landing" className="relative">
        <div className="landing-container">
          <div className="landing-center relative">
            <img src={Sejarah} alt="landing" className="w-full h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="text-4xl md:text-6xl font-bold text-center">{landingData.title}</h2>
              <h3 className="text-xl md:text-2xl font-bold mt-4 text-center">{landingData.description}</h3>
            </div>
          </div>
        </div>
      </section>
      
      {sejarah.map(item => (
        <section key={item.id} className="bg-white py-12 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/3">
              <img src={`http://210.79.191.157:5000/images/${item.image}`} alt={item.title} className="w-full rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default SejarahBatik;
