import React, { useState, useEffect } from 'react';
import { fetchData } from '../api'; 

const MotifBatik = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [motifs, setMotifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData('http://210.79.191.157:5000/api/motifs')
      .then(data => {
        setMotifs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMotifs = motifs.filter((motif) =>
    motif.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-0 px-4 py-20 bg-white shadow-md relative">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">Motif Batik</h1>
      <div className="relative mb-10 flex items-center justify-center md:justify-start">
        <input
          type="text"
          className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Cari ..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {filteredMotifs.map((motif, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-72">
              <img src={`http://210.79.191.157:5000${motif.image}`} alt={motif.name} className="w-full h-48 md:h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">{motif.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotifBatik;
