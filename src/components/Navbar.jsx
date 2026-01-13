import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-6 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 md:px-0">
        {/* Brand */}
        <div className="text-2xl font-bold">MyBrand</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#features" className="hover:text-blue-500 transition-colors duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-blue-500 transition-colors duration-300">
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 px-4">
          <li>
            <a href="#features" className="hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
