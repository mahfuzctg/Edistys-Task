import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed w-full z-10 bg-[#0056C0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              Edistys
            </Link>
          </div>

          {/* Desktop Menu (Center) */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-600">
              About
            </Link>
            <Link to="/services" className="hover:text-green-600">
              Services
            </Link>
          </div>
          <div className="hidden md:flex flex-grow font-bold border border-1 ">
            <Link to="/contact" className="hover:text-green-600">
              Contact Us
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
        <div className="md:hidden bg-transparent shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block text-white hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-white hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
