import React from 'react';
import products from '../productData.json';

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-10 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">Our Software Products</h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm text-blue-600 font-medium mb-2">{product.category}</p>
              <p className="text-gray-600 mb-3">{product.description}</p>

              {/* Tech used */}
              <div className="flex flex-wrap gap-2 text-xs text-white mb-4">
                {product.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-500 px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex space-x-3">
                {product.demo && (
                  <a
                    href={product.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
                  >
                    Demo
                  </a>
                )}
                {product.github && (
                  <a
                    href={product.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 px-4 py-2 rounded hover:bg-black"
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
