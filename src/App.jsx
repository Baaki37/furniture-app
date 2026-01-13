import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import FadeInSection from "./components/FadeInSection";

function App() {
  return (
    <div className="pt-24 font-body">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <FadeInSection>
        <section id="features" className="min-h-screen p-8 bg-brandLight">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-center text-brandBlue">Features</h2>
          <p className="text-center text-brandGray max-w-2xl mx-auto">
            Stylish furniture made to fit your lifestyle. Comfort and elegance in every piece.
          </p>
        </section>
      </FadeInSection>

      {/* Products Section */}
      <FadeInSection>
        <section id="products" className="min-h-screen p-8 bg-white">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center text-brandBlue">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            <ProductCard
              image="https://via.placeholder.com/300"
              title="Sofa Set"
              description="Comfortable modern sofa set."
              price="$499"
            />
            <ProductCard
              image="https://via.placeholder.com/300"
              title="Dining Table"
              description="Elegant wooden dining table."
              price="$299"
            />
            <ProductCard
              image="https://via.placeholder.com/300"
              title="Office Chair"
              description="Ergonomic chair for your workspace."
              price="$149"
            />
            <ProductCard
              image="https://via.placeholder.com/300"
              title="Bed Frame"
              description="Stylish king-size bed frame."
              price="$399"
            />
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className="min-h-screen p-8 bg-brandLight">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-center text-brandBlue">Contact</h2>
          <p className="text-center text-brandGray max-w-2xl mx-auto">
            Reach out to us for inquiries or custom orders.
          </p>
        </section>
      </FadeInSection>
    </div>
  );
}

export default App;
