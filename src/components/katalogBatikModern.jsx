import React, { useState, useEffect } from 'react';
import batikLanding from '../assets/batikmodern.png';
import { fetchData } from '../api';

const KatalogBatikTradisional = () => {
  const [motifs, setMotifs] = useState([]);
  const [selectedMotif, setSelectedMotif] = useState(null);

  useEffect(() => {
    fetchMotifs();
  }, []);

  const fetchMotifs = async () => {
    try {
      const data = await fetchData('http://210.79.191.157:5000/api/batikModern');
      console.log('Fetched motifs:', data);
      setMotifs(data);
    } catch (error) {
      console.error('Error fetching motifs:', error);
    }
  };

  const handleDetailClick = (motif) => {
    setSelectedMotif(motif);
  };

  const handleClosePopup = () => {
    setSelectedMotif(null);
  };

  return (
    <>
      <section id="landing" className="flex justify-center items-center h-screen bg-gray-200">
        <div className="landing-container">
          <div className="flex justify-center items-center">
            <img src={batikLanding} alt="landing" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      <section id="batik-tradisional" className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {motifs.map((motif, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-64 h-64">
                <img src={`http://210.79.191.157:5000/images/${motif.image}`} alt={`katalog${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                <img src={`http://210.79.191.157:5000/images/${motif.smallImage}`} alt={`small-image${index + 1}`} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 object-cover rounded-lg border-4 border-white shadow-lg" />
              </div>
              <div className="detail-card mt-4 md:mt-0 md:ml-4 text-center">
                <h2 className="text-lg md:text-2xl font-bold">{motif.name}</h2>
                <p className="mt-2 text-sm md:text-base whitespace-pre-line">{motif.description}</p>
                <button
                  onClick={() => handleDetailClick(motif)}
                  className="mt-4 bg-[#314E52] text-white px-4 py-2 rounded hover:bg-[#273f43]"
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMotif && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-md w-full relative">
            <button onClick={handleClosePopup} className="absolute top-0 right-0 bg-red-500 rounded-full -mt-2 -mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white p-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.707 10l5.147-5.146a.5.5 0 0 0-.708-.708L10 9.293 4.854 4.146a.5.5 0 0 0-.708.708L9.293 10l-5.147 5.146a.5.5 0 0 0 .708.708L10 10.707l5.146 5.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
              </svg>
            </button>
            <img src={`http://210.79.191.157:5000/images/${selectedMotif.smallImage}`} alt={selectedMotif.name} className="w-full h-56 object-cover mb-4" />
            <h2 className="text-lg md:text-2xl font-bold mb-2">{selectedMotif.name}</h2>
            <p className="text-sm md:text-base whitespace-pre-line">{selectedMotif.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default KatalogBatikTradisional;
