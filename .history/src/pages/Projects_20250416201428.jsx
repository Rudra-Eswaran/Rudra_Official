import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import products from '../productData.json';

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-12 px-4 md:px-16">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
        Our Software Products
      </h1>

      <div className="space-y-12">
        {products.map((product, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-1/3 h-64 object-cover"
            />

            {/* Product Details */}
            <div className="p-6 md:p-10 w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-3">{product.description}</p>

              {/* Live Demo Button */}
              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  href={product.demo || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
