import React, { useState } from 'react'
import ProductCard from './ProductCard';

const DetailWindow = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const openDetail = () => {
    setIsDetailOpen(true);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <div className="relative">
      {/* Product Image */}
     
      <img
        src="product-image.jpg"
        alt="Product Image"
        className="cursor-pointer"
      />

      {/* Detail Product Window */}
      {isDetailOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          {/* Modal */}
          <div className="bg-white p-8 max-w-md rounded shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-700 hover:text-gray-900"
              onClick={closeDetail}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Product Detail Content */}
            <h2 className="text-xl font-bold mb-4">Product Name</h2>
            <p className="text-gray-700">Product description goes here...</p>
            {/* Add to Cart Button, etc. */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailWindow