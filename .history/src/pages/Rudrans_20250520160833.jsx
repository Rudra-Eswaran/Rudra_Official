import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex items-center gap-3 mb-4">
        <FaLaptopCode size={32} className="text-blue-600 animate-pulse" />
        <h1 className="text-blue-600 font-semibold text-3xl">
          Rudrans Loading Tech Team
        </h1>
      </div>

      <div className="spinner mb-2"></div>
      <p className="text-gray-500 text-sm mt-2">Please wait, setting up tech magic...</p>

      <style jsx="true">{`
        .spinner {
          border: 6px solid #e5e7eb;
          border-top: 6px solid #2563eb;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
