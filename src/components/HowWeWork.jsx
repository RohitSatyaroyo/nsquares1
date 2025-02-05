import React from "react";
import { Search, Lightbulb, Target, TrendingUp,Superscript ,Monitor} from "lucide-react";
import { motion } from "framer-motion";

const HowWeWork = () => {
  const steps = [
    {
      id: "01",
      title: "Receive Product Enquiry",
      description:
        "We begin by carefully understanding your product requirements and specifications to ensure we can meet your exact needs.",
      icon: <Search className="w-8 h-8 text-yellow-400" />,
      position: "left",
    },
    {
      id: "02",
      title: "Verify Part Availability",
      description:
        "Our team checks our current database of N2 for part availability and sources to ensure we can fulfill your requirements.",
      icon: <Lightbulb className="w-8 h-8 text-pink-400" />,
      position: "right",
    },
    {
      id: "03",
      title: "Share Quote",
      description:
        "We provide a detailed quote against your requested parts with competitive pricing and delivery timelines.",
      icon: <TrendingUp className="w-8 h-8 text-teal-400" />,
      position: "left",
    },
    {
      id: "04",
      title: "Get Confirmation",
      description:
        "WeUpon your approval of the quote, we proceed with securing the supply confirmation for your order.",
      icon: <Target className="w-8 h-8 text-purple-400" />,
      position: "right",
    },
    {
      id: "05",
      title: "Supply & Invoice",
      description:
        "We process your order, arrange delivery, and provide you with all necessary documentation and invoicing.",
      icon: <Superscript className="w-8 h-8 text-purple-400" />,
      position: "left",
    },
    {
      id: "06",
      title: "Track & Monitor",
      description:
        "We provide comprehensive tracking services and warranty monitoring to ensure your complete satisfaction.",
      icon: <Monitor className="w-8 h-8 text-purple-400" />,
      position: "right",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
            How We Work
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-pink-400"></div>

          {/* Steps */}
          <div className="relative space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`flex ${
                  step.position === "left" ? "justify-start" : "justify-end"
                } items-center`}
                initial={{ opacity: 0, x: step.position === "left" ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Content Container */}
                <div
                  className={`relative w-full md:w-5/12 ${
                    step.position === "right" && "ml-auto"
                  }`}
                >
                  {/* Step Number */}
                  <div
                    className={`absolute top-0 ${
                      step.position === "left" ? "-right-16" : "-left-16"
                    } bg-gradient-to-r from-pink-400 to-yellow-400 text-black w-14 h-14 rounded-full shadow-md flex items-center justify-center font-bold text-xl transform -translate-y-1/2`}
                  >
                    {step.id}
                  </div>

                  {/* Card */}
                  <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector */}
                  <div
                    className={`absolute top-1/2 ${
                      step.position === "left" ? "right-0" : "left-0"
                    } w-16 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 transform -translate-y-1/2 ${
                      step.position === "left" ? "translate-x-full" : "-translate-x-full"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-8 md:px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeWork;
