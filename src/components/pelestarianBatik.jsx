import React, { useEffect, useState } from 'react';
import { fetchData } from '../api';

function PelestarianBatik() {
  const [pelestarian, setPelestarian] = useState([]);

  useEffect(() => {
    fetchData('http://210.79.191.157:5000/api/pelestarian')
      .then(data => {
        setPelestarian(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  if (pelestarian.length === 0) return null;

  return (
    <div>
      <section id="landing" className="relative">
        <div className="landing-container">
          <div className="landing-center relative">
            <img src={`http://210.79.191.157:5000/images/${pelestarian[0].image}`} alt="landing" className="w-full h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-4xl md:text-6xl font-bold">{pelestarian[0].title}</h2>
              <h3 className="text-xl md:text-2xl font-bold mt-4 text-center">{pelestarian[0].description}</h3>
            </div>
          </div>
        </div>
      </section>

      {pelestarian.slice(1).map(item => (
        <section key={item.id} className="bg-white py-12 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0">
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

export default PelestarianBatik;
