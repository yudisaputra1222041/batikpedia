import React from 'react';
import { Link } from 'react-router-dom';
import pelestarianImage from '../assets/pelestarian1.png';

const Pelestarian = () => {
  return (
    <section id="pelestarian" className="mt-32 p-6 bg-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl md:text-4xl text-center md:text-left text-black font-bold mb-4">Pelestarian Batik</h2>
          <p className="text-lg text-black text-center md:text-left mb-6">
            Dengan melestarikan batik, kita dapat memastikan bahwa keindahan dan makna dalam setiap motif dan pola tetap terjaga untuk dinikmati oleh generasi mendatang.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link 
              to="/pelestarianBatik" 
              className="bg-[#314E52] text-white inline-block py-2 px-6 rounded-lg shadow-md hover:bg-[#2A4347] transition duration-300"
            >
              Selengkapnya <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 bg-[#31A0B0] rounded-lg overflow-hidden">
          <img
            src={pelestarianImage}
            alt="pelestarian"
            className="w-full h-auto md:h-full object-cover"
            style={{ maxHeight: '26rem' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Pelestarian;
