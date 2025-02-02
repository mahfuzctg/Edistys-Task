import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-9/12 z-10 bg-transparent mt-3  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-4xl font-bold tracking-wide">
              ANYTECH
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <div className="relative group">
              <Link to="/" className="hover:text-white flex items-center">
                Solutions <span className="ml-1">&#9662;</span>
              </Link>
              {/* Add Dropdown Menu if Needed */}
            </div>
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
          </div>
          <div className="flex border border-white py-2 px-6 rounded-3xl items-center space-x-1">
            <Globe size={16} />
            <span>EN</span>
          </div>
          {/* Language and Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/contact"
              className="border border-white px-10 py-3 font-bold rounded-md hover:bg-white hover:text-blue-700 transition"
            >
              Contact Us &gt;
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/services"
              className="block hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
