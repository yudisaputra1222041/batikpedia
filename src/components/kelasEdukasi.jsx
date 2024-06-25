import React, { useState, useEffect } from 'react';
import { fetchData } from '../api'; 

function KelasEdukasi() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await fetchData('http://210.79.191.157:5000/api/kelasEdukasi');
        setClasses(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchClasses();
  }, []);

  const openPopup = (info) => {
    setPopupInfo(info);
  };

  const closePopup = () => {
    setPopupInfo(null);
  };

  return (
    <section id="motif" className="mt-0 px-4 py-20 bg-white shadow-md relative">
      <div className="motif-container">
        <section className="main">
          <div className="header-motif mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">Kelas Edukasi</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {classes.map((classInfo, index) => (
              <div key={index} className="image relative">
                <img src={`http://210.79.191.157:5000${classInfo.imageSrc}`} alt={`Kelas ${index + 1}`} className="gallery-image w-full h-auto rounded-lg" />
                <div className="description absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
                  <h3 className="text-lg font-semibold mb-1">{classInfo.title}</h3>
                  <p className="text-sm mb-2">{classInfo.location}</p>
                  <button onClick={() => openPopup(classInfo)} className="detail-button w-full bg-[#314E52] text-white rounded-md py-1 px-4 focus:outline-none hover:bg-opacity-90">Detail</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {popupInfo && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-md w-full relative">
            <button onClick={closePopup} className="absolute top-0 right-0 bg-red-500 rounded-full -mt-2 -mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white p-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.707 10l5.147-5.146a.5.5 0 0 0-.708-.708L10 9.293 4.854 4.146a.5.5 0 0 0-.708.708L9.293 10l-5.147 5.146a.5.5 0 0 0 .708.708L10 10.707l5.146 5.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
              </svg>
            </button>
            <img src={`http://210.79.191.157:5000${popupInfo.imageSrc}`} alt="Class Image" className="w-full h-56 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-bold mb-2">{popupInfo.title}</h2>
            <p className="whitespace-pre-line">{popupInfo.description}</p>
            <p className="mt-2"><strong>Lokasi:</strong> {popupInfo.location}</p>
            <p><strong>Sesi Program:</strong> {popupInfo.session}</p>
            <p><strong>Waktu:</strong> {popupInfo.time}</p>
            <a href={popupInfo.link} target="_blank" rel="noopener noreferrer" className="text-[#314E52] hover:underline">{popupInfo.link}</a>
          </div>
        </div>
      )}
    </section>
  );
}

export default KelasEdukasi;
