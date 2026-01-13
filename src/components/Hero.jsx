import React from "react";

function Hero() {
  return (
    <section className="bg-blue-100 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-24 py-16 md:py-32">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Welcome to My Product
        </h1>
        <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg">
          Build something amazing with our tools and solutions.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 hover:scale-105 transform transition-all duration-300">
  Get Started
</button>

      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Hero"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
