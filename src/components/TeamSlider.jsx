import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Mr. A",
      position: "Founder & CEO",
      bio: "Visionary leader with over a decade of experience in industrial and manufacturing solutions. Committed to driving innovation and operational excellence.",
      expertise: ["Industrial Strategy", "Process Optimization", "Leadership"],
      image: "https://via.placeholder.com/150x150.png?text=Mr.+A",
    },
    {
      name: "Mr. B",
      position: "Co-founder & CTO",
      bio: "Technology pioneer with a strong background in automation and IoT integration. Specializes in crafting scalable and efficient industrial architectures.",
      expertise: ["IoT Integration", "Automation Systems", "Technical Leadership"],
      image: "https://via.placeholder.com/150x150.png?text=Mr.+B",
    },
    {
      name: "Mr. C",
      position: "Head of Analytics",
      bio: "Data-driven expert leveraging analytics to enhance manufacturing efficiency and predict market trends. Ensures data-driven decision-making and transparency.",
      expertise: ["Industrial Analytics", "Performance Optimization", "Data Insights"],
      image: "https://via.placeholder.com/150x150.png?text=Mr.+C",
    },
  ];
  


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-4 text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our team of digital experts delivers innovative solutions to scale your business.
          </p>
        </div>

        {/* Team Slider */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-3 bg-gray-700/70 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-700 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-blue-500" />
            </button>

            {/* Team Member Cards */}
            {[-1, 0, 1].map((offset) => {
              const index = (currentSlide + offset + teamMembers.length) % teamMembers.length;
              const member = teamMembers[index];
              return (
                <motion.div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    offset === 0
                      ? "scale-100 opacity-100 z-20"
                      : "scale-90 opacity-60 z-10"
                  } bg-gray-800 rounded-2xl shadow-lg w-full max-w-sm p-6`}
                >
                  {/* Profile Image */}
                  <div className="relative flex flex-col items-center mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-36 h-36 object-cover rounded-full shadow-lg border-4 border-blue-500"
                    />
                  </div>

                  {/* Member Details */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-4">{member.position}</p>
                    <p className="text-gray-400 mb-6">{member.bio}</p>
                    <div className="space-y-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-3 bg-gray-700/70 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-700 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-blue-500" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentSlide === idx ? "bg-blue-500 w-6" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
