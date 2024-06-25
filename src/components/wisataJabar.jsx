import React, { useState, useEffect } from "react";
import { fetchData } from '../api'; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WisataJabar = () => {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('http://210.79.191.157:5000/api/wisataJabar');
        setImages(data.images.map(image => `http://210.79.191.157:5000${image}`));
        setDescription(data.description);
        setTitle(data.title);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    getData();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>

      <Carousel
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
          }
        }}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item pr-4"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-auto cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Wisata Jabar ${index}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
          onClick={handleCloseImage}
        >
          <div className="max-w-screen-lg mx-auto p-4">
            <img
              src={selectedImage}
              alt="Gambar Diperbesar"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-center md:text-left">Tempat Wisata Menarik di Jawa Barat</h2>
        <p className="text-lg text-center md:text-left" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default WisataJabar;
