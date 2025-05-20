import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600">
      <h1 className="text-white font-semibold text-3xl mb-6">
        Rudrans Loading Tech Team
      </h1>
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-16 w-16"></div>

      <style jsx>{`
        .loader {
          border-top-color: transparent;
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
