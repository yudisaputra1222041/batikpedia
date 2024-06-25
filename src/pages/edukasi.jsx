import React, { useState } from 'react';
import Header from '../components/header';
import EdukasiBatik from '../components/edukasiBatik';
import KelasEdukasi from '../components/kelasEdukasi';
import KontenBatik from '../components/kontenBatik';
import GameBatik from '../components/gameBatik';
import Footer from '../components/footer';

function Edukasi() { 

  return (
    <div>
      <Header />
      <EdukasiBatik/>
      <KelasEdukasi/>
      <KontenBatik/>
      <GameBatik/>
      <Footer />
    </div>
  );
}

export default Edukasi;
