import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const ClientStats = () => {
  const logos = [
    "https://cdn-icons-png.flaticon.com/512/3720/3720609.png",
    "https://i.pinimg.com/736x/1f/e3/f6/1fe3f69e69496ad1f36ccb8d2e98409f.jpg",
    "https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png",
    "https://cfcdn.apowersoft.info/astro/picwish/_astro/scene-logo-after.BrH0c_k5.png"

  ];

  const stats = [
    { value: "50+", description: "Satisfied Clients Worldwide", icon: "🌍" },
    { value: "57%", description: "Reduced Operational Costs", icon: "📉" },
    { value: "4.2", description: "Customer Satisfaction Rating", icon: "⭐" },
  ];

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl animate-blob opacity-40"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl animate-blob opacity-30 animation-delay-2000"></div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Trusted by Leading{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Brands & Agencies
            </span>
            {" "}Worldwide
          </h2>
          <p className="text-gray-400 text-lg">
            Empowering global businesses with scalable and innovative industrial solutions.
          </p>
        </motion.div>

        {/* Logos Slider */}
        <div className="mb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 flex items-center justify-center h-32"
                >
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-lg">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientStats;
