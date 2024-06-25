import React, { useState, useEffect } from "react";
import Game1 from "../assets/Game1.png";
import Salah from "../assets/salah.gif";
import Benar from "../assets/benar.gif";
import { fetchData } from "../api";

const Game = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedBatik, setSelectedBatik] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [batikIndex, setBatikIndex] = useState(0);
  const [shuffledBatikData, setShuffledBatikData] = useState([]);
  const [correctModalOpen, setCorrectModalOpen] = useState(false);
  const [incorrectModalOpen, setIncorrectModalOpen] = useState(false);
  const [gameBatikData, setGameBatikData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const data = await fetchData("http://210.79.191.157:5000/api/gameBatik");
        setGameBatikData(data);
      } catch (error) {
        console.error("Error fetching gameBatik data:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const openPopup = () => {
    setShuffledBatikData(shuffleArray([...gameBatikData]));
    setBatikIndex(0);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedBatik(null);
  };

  const handleSubmit = () => {
    setPopupOpen(false);
    if (!selectedBatik) return;

    if (
      selectedBatik.name.toLowerCase() ===
      shuffledBatikData[batikIndex].name.toLowerCase()
    ) {
      setShowImage(true);
      setCorrectModalOpen(true);
    } else {
      setShowImage(false);
      setIncorrectModalOpen(true);
    }
  };

  return (
    <section id="game" className="px-4 py-20 bg-white shadow-md mt-16 relative">
      <div className="flex flex-col items-start">
        <div className="header-konten mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 text-center md:text-left">Game Tebak Motif</h1>
        </div>
        <div className="flex justify-between w-full mt-5 bg-[#314E52] rounded-lg">
          <div className="p-5">
            <img
              src={Game1}
              alt="Game Membatik"
              className="w-full max-w-full h-auto block rounded-lg"
            />
          </div>
          <div className="p-5 rounded-lg">
            <h2 className="text-4xl/7 text-white mt-12 font-poppins font-semibold">
              Game edukasi tebak motif batik
            </h2>
            <p className="text-white text-lg leading-7 mt-3 font-poppins">
              Ayo jelajahi warisan budaya Indonesia melalui game interaktif kami. Klik gambar motif batik dan tunjukkan sejauh mana pengetahuanmu! Saksikanlah keindahan tradisi yang tersembunyi di setiap pola, dan jadilah bagian dari perjalanan ini untuk memperkaya pemahaman akan kekayaan budaya kita.
            </p>
            <button
              className="mt-5 px-5 py-2 bg-white text-[#314E52] rounded font-poppins"
              onClick={openPopup}
            >
              Mulai Bermain
            </button>
          </div>
        </div>
      </div>

      {popupOpen && shuffledBatikData.length > 0 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
          <div className="bg-white p-4 mx-4 my-8 rounded-lg sm:p-8 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative">
            <button onClick={closePopup} className="absolute top-0 right-0 bg-red-500 rounded-full -mt-2 -mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white p-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.707 10l5.147-5.146a.5.5 0 0 0-.708-.708L10 9.293 4.854 4.146a.5.5 0 0 0-.708.708L9.293 10l-5.147 5.146a.5.5 0 0 0 .708.708L10 10.707l5.146 5.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex items-center justify-center">
              <img src={`http://210.79.191.157:5000${shuffledBatikData[batikIndex].image}`} alt="Batik" className="w-48 rounded-lg sm:w-56" />
              <div className="bg-white ml-4 p-2 sm:p-5 rounded-md">
                <p className="text-sm sm:text-base">Apakah nama motif batik dari potongan gambar disamping?</p>
                <ul className="mt-2">
                  {gameBatikData.map((batik, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        name="batik"
                        value={batik.name}
                        onChange={() => setSelectedBatik(batik)}
                      />
                      <label className="ml-2">{batik.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="bg-[#314E52] w-24 sm:w-40 rounded-lg text-white py-2 px-4" onClick={handleSubmit}>
                Kirim
              </button>
            </div>
          </div>
        </div>
      )}

      {correctModalOpen && selectedBatik && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
          <div className="bg-white p-4 mx-4 my-8 rounded-lg sm:p-8 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative">
            <button onClick={() => setCorrectModalOpen(false)} className="absolute top-0 right-0 bg-red-500 rounded-full -mt-2 -mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white p-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.707 10l5.147-5.146a.5.5 0 0 0-.708-.708L10 9.293 4.854 4.146a.5.5 0 0 0-.708.708L9.293 10l-5.147 5.146a.5.5 0 0 0 .708.708L10 10.707l5.146 5.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-[#314E52] text-white py-2 px-4 rounded-lg h-16 w-3/4 mb-4">
                <img src={Benar} alt="Gif" className="h-full mr-4" />
                <h2 className="text-white font-poppins text-xl font-bold text-center">Wow! Pengetahuanmu sungguh luar biasa</h2>
              </div>
              <div className="flex items-center mt-4 sm:mt-6">
                <img src={`http://210.79.191.157:5000${shuffledBatikData[batikIndex].image}`} alt={shuffledBatikData[batikIndex].name} className="w-36 sm:w-56 rounded-lg" />
                <div className="bg-white w-full sm:ml-4 mt-4 sm:mt-0 p-2 sm:p-5 rounded-md">
                  <p className="text-sm sm:text-base text-black font-poppins text-xl font-semibold">Nah, ini detail lengkapnya ya!</p>
                  <p className="mt-2 text-sm sm:text-base text-black font-poppins">{shuffledBatikData[batikIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {incorrectModalOpen && selectedBatik && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
          <div className="bg-white p-4 mx-4 my-8 rounded-lg sm:p-8 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative">
            <button onClick={() => setIncorrectModalOpen(false)} className="absolute top-0 right-0 bg-red-500 rounded-full -mt-2 -mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white p-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.707 10l5.147-5.146a.5.5 0 0 0-.708-.708L10 9.293 4.854 4.146a.5.5 0 0 0-.708.708L9.293 10l-5.147 5.146a.5.5 0 0 0 .708.708L10 10.707l5.146 5.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-[#314E52] text-white py-2 px-4 rounded-lg h-16 w-3/4 mb-4">
                <img src={Salah} alt="Gif" className="h-full mr-4" />
                <h2 className="text-white font-poppins text-xl font-bold text-center">Yah, jawabannya masih kurang tepat nihhh!</h2>
              </div>
              <div className="flex items-center mt-4 sm:mt-6">
                <img src={`http://210.79.191.157:5000${shuffledBatikData[batikIndex].image}`} alt={shuffledBatikData[batikIndex].name} className="w-36 sm:w-56 rounded-lg" />
                <div className="bg-white w-full sm:ml-4 mt-4 sm:mt-0 p-2 sm:p-5 rounded-md">
                  <p className="text-sm sm:text-base text-black font-poppins text-xl font-semibold">Nah, ini jawaban yang benar!</p>
                  <p className="mt-2 text-sm sm:text-base text-black font-poppins">{shuffledBatikData[batikIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Game;
