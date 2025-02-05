import React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const Projects = () => {
  const projectData = [
    {
      title: "ClothinBitt Inc.",
      description:
        "A thriving e-commerce platform specializing in clothing. With our innovative design and seamless payment integration, ClothinBitt Inc. has transformed into a top-tier fashion brand, trusted by thousands of satisfied customers.",
      thumbnail: "https://i.postimg.cc/jdX4GwzY/Screenshot-277.png",
      url: "https://www.clothinbittinc.com/",
    },
    {
      title: "BroRooms",
      description:
        "Redefining the room-searching experience, BroRooms leverages a cutting-edge platform with an admin panel that simplifies managing listings and bookings. Our technology has made them a leader in hassle-free accommodations.",
      thumbnail: "https://i.postimg.cc/L883R9TY/Screenshot-278.png",
      url: "https://www.brorooms.com/",
    },
    {
      title: "IKD Marketing Agency",
      description:
        "We created a vibrant digital marketing agency website that seamlessly blends portfolios, interactive elements, and responsiveness. IKD Marketing Agency now serves as a benchmark for professional online presence.",
      thumbnail: "https://i.postimg.cc/s2BPQTb3/Screenshot-279.png",
      url: "https://ikd-marketingagencies.vercel.app/",
    },
    {
      title: "JobHunter-Royo",
      description:
        "A dynamic job-searching platform, JobHunter-Royo connects job seekers with opportunities. Featuring a powerful admin panel for HR teams, it’s now the go-to choice for career advancement.",
      thumbnail: "https://i.postimg.cc/zf9Cnn1K/Screenshot-280.png",
      url: "https://jobhunter-royo.vercel.app/",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-[#1a1a1a] to-[#2c0202] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-red-500 to-gray-300 bg-clip-text">
            Real-Time Projects Trusted by Clients
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Explore our live projects that showcase how we empower businesses with scalable, innovative, and client-focused solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#121212] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-red-400 hover:text-red-500 transition-colors"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  <span>View Project</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
