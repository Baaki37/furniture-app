import React from "react";

function Hero() {
  return (
    <section className="bg-brandLight flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-24 py-16 md:py-32">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="font-heading text-3xl md:text-5xl text-brandBlue mb-6">
          Welcome to My Furniture
        </h1>
        <p className="font-body text-brandGray mb-6 md:mb-8 text-base md:text-lg">
          Discover stylish and modern furniture that transforms your space.
        </p>
        <button className="bg-brandAccent text-white px-6 py-3 rounded-lg hover:bg-brandBlue hover:scale-105 transform transition-all duration-300 font-body">
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
