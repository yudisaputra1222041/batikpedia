import React from 'react';
import edukasi from '../assets/edukasi.png';

function EdukasiBatik() {
  return (
    <section id="landing" className="relative">
      <div className="landing-container">
        <div className="landing-center relative">
          <img src={edukasi} alt="landing" className="w-full h-auto object-cover max-h-screen" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight sm:leading-tight">
              KONTEN EDUKASI
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-4 text-center max-w-4xl leading-snug sm:leading-snug">
              Mari telusuri dunia menarik membatik melalui kelas-kelas dan konten edukasi. 
              Temukan rahasia teknik-teknik tradisional, kisah inspiratif, 
              dan informasi mendalam yang akan memperkaya pengetahuan Anda tentang seni yang indah ini.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EdukasiBatik;
