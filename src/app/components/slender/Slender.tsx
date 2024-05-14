import React from "react";

const SlenderWindow: React.FC = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="relative">
            <img
              src="wallet_1.png" // Replace with your image URL
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src="wallet_2.png" // Replace with your image URL
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src="laptop.png" // Replace with your image URL
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src="marka.png" // Replace with your image URL
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlenderWindow;
