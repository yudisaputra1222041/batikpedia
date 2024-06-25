import React, { useState } from 'react';
import Header from '../components/header';
import LandingPage from '../components/landingPage';
import MotifBatik from '../components/motifBatik';
import Berita from '../components/berita';
import Sejarah from '../components/sejarah';
import Pelestarian from '../components/pelestarian';
import Footer from '../components/footer';

function Beranda() {

  return (
    <div>
      <Header />
      <LandingPage />
      <MotifBatik/>
      <Berita />
      <Sejarah />
      <Pelestarian />
      <Footer />
    </div>
  );
}

export default Beranda;
