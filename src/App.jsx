import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import FadeInSection from "./components/FadeInSection"; // optional fade-in effect

function App() {
  return (
    <div className="pt-24">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <FadeInSection>
        <section id="features" className="min-h-screen p-8 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Features
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Describe your product features here. Make it clear why users should love it!
          </p>
        </section>
      </FadeInSection>

      {/* Products Section */}
      <FadeInSection>
        <section id="products" className="min-h-screen p-8 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            <ProductCard
              image="https://via.placeholder.com/300"
              title="Product 1"
              description="This is a great product."
              price="$29.99"
            />
            <ProductCard
              image="https://via.placeholder.com/300"
              title="Product 2"
              description="This is another amazing product."
              price="$39.99"
            />
            <ProductCard
              image="https://via.placeholder.com/300"
              title="Product 3"
              description="You will love this one!"
              price="$19.99"
            />
            <ProductCard
              image="https://via.placeholder.com/300"
              title="Product 4"
              description="Best value for your money."
              price="$49.99"
            />
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className="min-h-screen p-8 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Put your contact form or email info here.
          </p>
        </section>
      </FadeInSection>
    </div>
  );
}

export default App;
