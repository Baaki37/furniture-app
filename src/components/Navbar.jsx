import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-6 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 md:px-0">
        <div className="text-2xl font-heading text-brandBlue">MyBrand</div>

        <ul className="hidden md:flex space-x-6 font-body text-brandGray">
          <li><a href="#features" className="hover:text-brandAccent transition-colors duration-300">Features</a></li>
          <li><a href="#products" className="hover:text-brandAccent transition-colors duration-300">Products</a></li>
          <li><a href="#contact" className="hover:text-brandAccent transition-colors duration-300">Contact</a></li>
        </ul>

        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60 mt-4" : "max-h-0"}`}>
        <ul className="flex flex-col space-y-3 px-4 font-body text-brandGray">
          <li><a href="#features" onClick={() => setIsOpen(false)} className="hover:text-brandAccent transition-colors duration-300">Features</a></li>
          <li><a href="#products" onClick={() => setIsOpen(false)} className="hover:text-brandAccent transition-colors duration-300">Products</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-brandAccent transition-colors duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
