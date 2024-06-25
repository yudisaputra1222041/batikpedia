import React from 'react';
import { Link } from 'react-router-dom';
import sejarahImage from '../assets/sejarah1.png';

const Sejarah = () => {
  return (
    <section id="pelestarian" className="mt-32 p-6 bg-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 bg-[#F2A154] rounded-lg overflow-hidden">
          <img
            src={sejarahImage}
            alt="sejarah"
            className="w-full h-full object-cover"
            style={{ maxHeight: '26rem' }}
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl md:text-4xl text-center md:text-left text-black font-bold mb-4">Sejarah Batik</h2>
          <p className="text-lg text-black text-center md:text-left mb-6">
            Batik telah menjadi bagian hidup masyarakat Indonesia sejak 1.500 tahun yang lalu. 
            Selama berabad-abad, Batik telah menjadi simbol dalam momen-momen besar kehidupan manusia.
          </p>
          <Link 
            to="/sejarahBatik" 
            className="bg-[#314E52] text-white inline-block py-2 px-6 rounded-lg shadow-md hover:bg-[#2A4347] transition duration-300"
          >
            Selengkapnya <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;
