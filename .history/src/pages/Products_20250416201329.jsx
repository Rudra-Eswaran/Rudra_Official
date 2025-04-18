import React from 'react';
import products from '../productData.json';

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-12 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-14 text-blue-900">Our Software Products</h1>

      <div className="space-y-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-2xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Image on left */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-1/3 h-64 object-cover"
            />

            {/* Text on right */}
            <div className="p-6 md:p-10 w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-md mb-4">{product.description}</p>

              {/* Action buttons */}
              <div className="flex justify-center md:justify-start space-x-4">
                {product.demo && (
                  <a
                    href={product.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                {product.github && (
                  <a
                    href={product.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
