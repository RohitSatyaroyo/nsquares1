import React from "react";
import { Facebook, Twitter, Linkedin, ArrowUp, Send } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-4 whitespace-nowrap">
              N-SQUARE
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              N-SQUARE COMPONENTS AND DEVICES is your trusted partner for industrial components and devices. We specialize in sourcing and supplying critical components for EMS, Automotive, and Automation industries, ensuring optimal performance and reliability.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our commitment to quality and timely delivery makes us a preferred choice for businesses seeking reliable component solutions. We take pride in contributing to the success of manufacturing operations across India.
            </p>

            <div className="flex space-x-4">
              <RouterLink
                to="/facebook"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook size={24} />
              </RouterLink>
              <RouterLink
                to="/twitter"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Twitter size={24} />
              </RouterLink>
              <RouterLink
                to="/linkedin"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={24} />
              </RouterLink>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <RouterLink
                  to="/blog"
                  className="text-gray-400 hover:text-blue-500 cursor-pointer"
                >
                  Blog
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/services"
                  className="text-gray-400 hover:text-blue-500 cursor-pointer"
                >
                  Services
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/faq"
                  className="text-gray-400 hover:text-blue-500 cursor-pointer"
                >
                  FAQ
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  className="text-gray-400 hover:text-blue-500 cursor-pointer"
                >
                  Contact
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p className="text-gray-400">
                Survey No. 365/2C, Walajabad Road
                Sunguvarchatram, Sriperumbudur Taluk
                Kancheepuram, Tamil Nadu - 602106

                nsquarecomponentsdevices@gmail.com
              </p>
              <p className="text-gray-400">
                <RouterLink
                  to="/contact"
                  className="hover:text-blue-500"
                >
                  +91 9686842540
                </RouterLink>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-12 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600">
                <Send size={24} />
              </button>
            </div>
            <p className="text-gray-400">
              Sign up for our newsletter to stay updated on the latest trends, tips, and special offers.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2025 N-SQUARE COMPONENTS AND DEVICES. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <RouterLink to="/privacy-policy" className="text-gray-400 hover:text-blue-500 text-sm">
              Privacy Policy
            </RouterLink>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-blue-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowUp size={24} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
