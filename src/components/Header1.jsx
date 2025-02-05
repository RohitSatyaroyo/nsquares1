import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Link } from "react-scroll";

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Homepage", to: "hero" },
    { label: "About us", to: "t1" },
    { label: "Services", to: "ourservices" },
    { label: "Contact us", to: "consultationform" },
    { label: "Our Works", to: "pro" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
         <div className="flex-shrink-0 flex items-center">
       


            <span className="text-white text-2xl font-bold">N-SQUARE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="consultationform"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all duration-200 font-semibold cursor-pointer"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 shadow-lg">
            <div className="px-4 pt-4 pb-4 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="consultationform"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold text-center"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;
