import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import tulisanLogo from '../assets/tulisanlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="navbar" className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="main-container">
        <div className="nav flex justify-between items-center px-4 sm:px-8 py-4">
          <div className="logo flex items-center">
            <img src={logo} alt="logo" className="h-8 mr-2" />
            <img src={tulisanLogo} alt="logo" />
          </div>
          <nav className={`sm:flex ${isOpen ? 'flex' : 'hidden'} mt-4 sm:mt-0`}>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <li><Link to="/" className="text-black hover:bg-[#314E52] hover:text-white px-4 py-2 rounded block">Beranda</Link></li>
              <li><Link to="/katalog" className="text-black hover:bg-[#314E52] hover:text-white px-4 py-2 rounded block">Katalog Batik</Link></li>
              <li><Link to="/wisata" className="text-black hover:bg-[#314E52] hover:text-white px-4 py-2 rounded block">Wisata Batik</Link></li>
              <li><Link to="/edukasi" className="text-black hover:bg-[#314E52] hover:text-white px-4 py-2 rounded block">Konten Edukasi</Link></li>
            </ul>
          </nav>
          <button
            className="sm:hidden block text-black hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
