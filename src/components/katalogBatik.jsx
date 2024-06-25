import React from 'react';
import { Link } from 'react-router-dom';
import Katalog from '../assets/katalog.png';
import Katalog1 from '../assets/katalog1.png';
import Katalog2 from '../assets/katalog2.png';

function KatalogBatik() {
  return (
    <div>
      <section id="landing" className="relative">
        <div className="landing-container">
          <div className="landing-center relative">
            <img src={Katalog} alt="landing" className="w-full h-auto object-cover max-h-screen" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight sm:leading-tight">KATALOG BATIK</h2>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-4 text-center max-w-4xl leading-snug sm:leading-snug">
                Batik (atau kata Batik) berasal dari bahasa Jawa “amba” artinya menulis & titik. 
                Kata batik merujuk pada kain dengan corak yang dihasilkan oleh bahan malam (hot wax) 
                yang diaplikasikan ke atas kain, sehingga menahan masuknya bahan pewarna (dye).
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="katalog-tradisional" className="bg-white py-12 md:py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
            <img src={Katalog1} alt="katalog1" className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Batik Tradisional</h2>
            <p className="mb-4">Batik tradisional adalah seni tekstil dengan motif-motif simbolis, 
              dibuat dengan teknik khas seperti canting dan malam serta menggunakan pewarna alami.
            </p>
            <Link to="/katalogBatikTradisional" className="bg-[#314E52] inline-block py-2 px-4 text-white rounded-lg">
              Selengkapnya <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
   
      <section id="katalog-modern" className="bg-white py-12 md:py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Batik Modern</h2>
            <p className="mb-4">Batik modern adalah variasi kontemporer dengan desain dan teknik yang lebih eksperimental, 
              mungkin menggunakan teknologi modern dan bahan kain yang beragam.
            </p>
            <Link to="/katalogBatikModern" className="bg-[#314E52] inline-block py-2 px-4 text-white rounded-lg">
              Selengkapnya <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img src={Katalog2} alt="katalog2" className="w-full rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default KatalogBatik;
