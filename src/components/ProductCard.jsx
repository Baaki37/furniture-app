import React from "react";

function ProductCard({ image, title, description, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-heading mb-2">{title}</h3>
        <p className="text-brandGray mb-4 font-body">{description}</p>
        <p className="text-brandAccent font-bold text-lg font-body">{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
