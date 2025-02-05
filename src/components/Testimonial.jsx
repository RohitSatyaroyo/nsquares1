import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Their advanced industrial solutions have revolutionized our manufacturing process. We've experienced significant efficiency improvements and cost savings.",
      name: "Courtney Wright",
      location: "New York, USA",
      image:
        "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/img__0001_Layer-7.jpg",
    },
    {
      quote:
        "The team delivered top-notch automation tools that perfectly aligned with our operational goals. Highly recommend their expertise!",
      name: "Marisa Randall",
      location: "Los Angeles, USA",
      image:
        "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/img__0003_Layer-5.jpg",
    },
    {
      quote:
        "Their innovative approach and dedication to quality have transformed our production line. The results were beyond our expectations!",
      name: "Thomas Stewart",
      location: "London, UK",
      image:
        "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/img__0004_Layer-4.jpg",
    },
  ];
  

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20 px-4 sm:px-6 lg:px-8 text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-cyan-400 font-medium text-lg mb-4 block uppercase"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Hear from businesses around the world who trusted us to deliver
            exceptional web solutions tailored to their needs.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-gray-400 italic mb-8 text-lg leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
