import React from "react";
import Navbar from "./componentsNavbar"; // Assuming your Navbar component is in the same folder

const App = () => {
  return (
    <div>
      {/* Floating Navbar */}
      <Navbar />

      {/* Content below the Navbar */}
      <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex justify-center items-center">
        <div className="max-w-4xl text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to the Rudrans Website</h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore our team, portfolio, services, and more.
          </p>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
};

export default App;
