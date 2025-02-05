import React from "react";
import { motion } from "framer-motion";

const T1 = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image with Experience Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl shadow-2xl overflow-hidden relative transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.pexels.com/photos/9028875/pexels-photo-9028875.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Advanced Manufacturing"
              className="w-full h-full object-cover"
            />
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-8 -right-8 bg-gradient-to-r from-green-600 via-blue-500 to-gray-400 text-white rounded-full p-6 shadow-xl transform hover:scale-110 transition-transform duration-300"
            >
              <div className="text-center">
                <span className="text-5xl font-extrabold">10+</span>
                <div className="text-sm mt-1">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - About Us Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent leading-tight tracking-wide">
            About Our Company
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            At <span className="text-green-400 font-bold">N-SQUARE</span>, we are a key supply strategy partner for EMS, Automotive, and Automation industries. We design, manufacture, and supply precision-engineered hardware and devices that power the future of industries worldwide. Our expertise spans advanced machinery, electronics, and turnkey solutions that redefine operational efficiency.
          </p>

          {/* What Sets Us Apart */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold text-white">Our Edge</h3>
            <p className="text-gray-300 mt-3 leading-relaxed">
              We combine state-of-the-art manufacturing techniques with innovation to deliver solutions tailored for industrial needs. With a commitment to quality, reliability, and scalability, we help businesses achieve unparalleled success.
            </p>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-center gap-4">
              <span className="bg-blue-500 text-white p-3 rounded-full">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              Strategic sourcing and supply of key components
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-green-500 text-white p-3 rounded-full">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              Advanced automation and IoT-enabled solutions
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-purple-500 text-white p-3 rounded-full">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              Pan-India delivery network with optimal timing
            </li>
          </ul>

          {/* Call to Action */}
          
        </motion.div>
      </div>
    </div>
  );
};

export default T1;
