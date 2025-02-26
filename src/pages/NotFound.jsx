import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center w-full sm:w-[600px]">
        <h1 className="text-6xl font-bold text-gray-800 md:text-8xl">404</h1>
        <p className="mt-4 text-xl text-gray-600 md:text-2xl">Page Not Found</p>
        <p className="mt-2 text-lg text-gray-500 md:text-xl">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;