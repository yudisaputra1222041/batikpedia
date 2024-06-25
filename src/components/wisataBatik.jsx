import React from 'react';
import { Link } from 'react-router-dom';
import Wisata1 from '../assets/WisataJatim 1.png';
import Wisata2 from '../assets/WisataJateng1.png';
import Wisata3 from '../assets/WisataJabar1.png';

function WisataBatik() {
  return (
    <div>
      <section id="wisata-batik" className="bg-white py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <img src={Wisata1} alt="wisata1" className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Jawa Timur</h2>
            <p className="text-lg text-center md:text-left mb-6">
              Jawa Timur terkenal dengan keberagaman budayanya, termasuk warisan batiknya. 
              Batik dari daerah ini seringkali menggambarkan motif-motif yang kaya 
              akan tradisi lokal dan kearifan lokal.
            </p>
            <div className="text-center md:text-left">
              <Link 
                to="/wisataJatim" 
                className="bg-[#314E52] text-white inline-block py-2 px-6 rounded-lg shadow-md hover:bg-[#2A4347] transition duration-300"
              >
                Jelajahi <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="wisata-batik" className="bg-white py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 order-last md:order-first">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Jawa Tengah</h2>
            <p className="text-lg text-center md:text-left mb-6">
              Jawa Tengah memiliki sejarah panjang dalam produksi batik Indonesia. 
              Batik dari daerah ini seringkali dikenal dengan motif klasik 
              dan penggunaan warna yang kaya.
            </p>
            <div className="text-center md:text-left">
              <Link 
                to="/wisataJateng" 
                className="bg-[#314E52] text-white inline-block py-2 px-6 rounded-lg shadow-md hover:bg-[#2A4347] transition duration-300"
              >
                Jelajahi <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={Wisata2} alt="wisata2" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      <section id="wisata-batik" className="bg-white py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <img src={Wisata3} alt="wisata3" className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Jawa Barat</h2>
            <p className="text-lg text-center md:text-left mb-6">
              Jawa Barat adalah salah satu pusat pengembangan batik di Indonesia. 
              Kaya akan tradisi budaya Sunda, batik dari daerah ini seringkali 
              memadukan unsur-unsur alam dan khas Sunda.
            </p>
            <div className="text-center md:text-left">
              <Link 
                to="/wisataJabar" 
                className="bg-[#314E52] text-white inline-block py-2 px-6 rounded-lg shadow-md hover:bg-[#2A4347] transition duration-300"
              >
                Jelajahi <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WisataBatik;
