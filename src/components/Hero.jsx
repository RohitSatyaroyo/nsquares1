import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1920',
    'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1920',
    'https://images.pexels.com/photos/9886298/pexels-photo-9886298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1920',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
     <div className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Main Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
      Innovating<br />
      the Future of<br />
      Industrial Solutions.
    </h1>

    {/* Description */}
    <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto bg-blue-900 bg-opacity-50 p-4 rounded-md shadow-md">
  Delivering precision-engineered products and cutting-edge manufacturing solutions to meet the demands of modern industries.
</p>


    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
      <Link
        to="consultationform"
        smooth={true}
        duration={500}
        offset={-80}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold cursor-pointer"
      >
        Explore Our Services
      </Link>
      <Link
        to="consultationform"
        smooth={true}
        duration={500}
        offset={-80}
        className="border-2 border-white text-white px-8 py-4 rounded-lg shadow-lg hover:bg-white hover:text-black transition-colors duration-200 text-lg font-semibold cursor-pointer"
      >
        Request a Quote
      </Link>
    </div>

    {/* Features */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white text-sm">
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>Precision-Engineered Products</span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>Innovative Manufacturing Solutions</span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>Reliable Industry Support</span>
      </div>
    </div>
  </div>
</div>


      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 shadow-lg ${
              currentSlide === index
                ? "bg-blue-500"
                : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  
      
         

      
  );
};

export default Hero;
