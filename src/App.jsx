import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beranda from './pages/beranda';
import SejarahBatik from './pages/sejarahBatik';
import PelestarianBatik from './pages/pelestarianBatik';
import Katalog from './pages/katalog';
import KatalogBatikTradisional from './pages/katalogBatikTradisional';
import KatalogBatikModern from './pages/katalogBatikModern';
import Wisata from './pages/wisata';
import WisataJatim from './pages/wisataJatim';
import WisataJateng from './pages/wisataJateng';
import WisataJabar from './pages/wisataJabar';
import Edukasi from './pages/edukasi';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  // State untuk menyimpan data dari API
  const [data, setData] = useState(null);

  // Mengambil data dari API menggunakan Axios saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://210.79.191.157/api/berita');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Memuat skrip Watson Assistant Chat saat komponen dimuat
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
    script.async = true;
    script.onload = () => {
      window.watsonAssistantChatOptions = {
        integrationID: "26de6106-c010-45d5-ac2b-14c1e552c5b9",
        region: "us-south",
        serviceInstanceID: "7d27b156-731a-42b0-8962-f560ffbf9d6f",
        onLoad: async (instance) => { await instance.render(); }
      };
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Data from API</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/SejarahBatik" element={<SejarahBatik />} />
          <Route path="/PelestarianBatik" element={<PelestarianBatik />} />
          <Route path="/Katalog" element={<Katalog />} />
          <Route path="/katalogBatikTradisional" element={<KatalogBatikTradisional />} />
          <Route path="/katalogBatikModern" element={<KatalogBatikModern />} />
          <Route path="/Wisata" element={<Wisata />} />
          <Route path="/WisataJatim" element={<WisataJatim />} />
          <Route path="/WisataJateng" element={<WisataJateng />} />
          <Route path="/WisataJabar" element={<WisataJabar />} />
          <Route path="/Edukasi" element={<Edukasi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
