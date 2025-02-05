import React, { useState } from "react";
import { ChevronDown, Search, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer for industrial and manufacturing businesses?",
      answer:
        "We specialize in industrial automation, IoT integration, process optimization, and customized software solutions tailored for manufacturing operations.",
      category: "Services",
    },
    {
      question: "How long does it take to implement your solutions?",
      answer:
        "The timeline depends on the complexity and scale of the project. Typically, automation and IoT projects take 6-12 weeks, while custom solutions may vary based on requirements.",
      category: "Timeline",
    },
    {
      question: "Do you provide predictive maintenance solutions?",
      answer:
        "Yes, we offer predictive maintenance solutions powered by advanced analytics and real-time monitoring to reduce downtime and improve efficiency.",
      category: "Predictive Maintenance",
    },
    {
      question: "Can you optimize our existing manufacturing processes?",
      answer:
        "Absolutely! We provide process optimization services to enhance productivity, reduce waste, and improve overall operational efficiency.",
      category: "Optimization",
    },
    {
      question: "What technologies do you use for industrial solutions?",
      answer:
        "We leverage a wide range of technologies, including IoT platforms, AI-driven analytics, industrial sensors, and custom automation frameworks.",
      category: "Technologies",
    },
    {
      question: "How do you ensure the security of industrial systems?",
      answer:
        "We implement robust security measures such as encrypted communication, secure protocols, and regular system updates to protect your industrial operations from potential threats.",
      category: "Security",
    },
    {
      question: "Do you provide ongoing support for implemented solutions?",
      answer:
        "Yes, we offer comprehensive support and maintenance plans to ensure your systems remain operational, secure, and optimized for long-term performance.",
      category: "Support",
    },
  ];
  

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 sm:px-6 lg:px-8 min-h-screen text-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            Answers to the most common questions about our web agency and how we can help your business grow online.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-gray-800"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white">
                      <MessageCircle className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-semibold text-gray-100">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
                <span className="inline-block mt-2 text-sm text-blue-500 bg-blue-600 bg-opacity-10 px-2 py-1 rounded-full">
                  {faq.category}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No matching questions found. Try adjusting your search terms.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            Contact Support
            <ChevronDown className="ml-2 w-4 h-4 transform -rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
