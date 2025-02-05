import React from 'react';
import { Link } from 'react-scroll';
const T3 = () => {
  return (
    <div className="relative min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Advanced Industrial Solutions"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/60 to-gray-900/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[600px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Our<br />Services
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We are familiar with the needs of Industries like Automation, EMS, Automotive to build equipment and machinery and sustain of those to meet designed requirements. To achieve above goal sourcing of right devices and components are essential. We help on providing suitable parts at affordable price at convenient time. Hence our service is key to make your business successful.
          </p>

          {/* Button */}
           <Link
      to="consultationform"
      smooth={true}
      duration={500}
      offset={-80}
      className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 text-lg font-semibold cursor-pointer"
    >
      LEARN MORE
    </Link>
        </div>
      </div>
    </div>
  );
};

export default T3;
