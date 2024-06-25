import React from 'react';
import landingImage from '../assets/landing.png';

function EdukasiBatik() {
  return (
    <section id="edukasi" className="relative">
      <div className="edukasi-container">
        <div className="edukasi-center relative">
          <img src={landingImage} alt="edukasi" className="w-full h-auto object-cover max-h-screen" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight sm:leading-tight">BATIK PEDIA</h2>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-4 text-center max-w-4xl leading-snug sm:leading-snug">Karya Seni Warisan Bangsa Indonesia</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EdukasiBatik;
