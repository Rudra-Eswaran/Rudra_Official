import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-center">
      {/* Logo / Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-widest mb-6">
        RUDRA
      </h1>

      {/* Loading Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Optional message */}
      <p className="mt-4 text-lg text-gray-600"></p>
    </div>
  );
};

export default Home;
