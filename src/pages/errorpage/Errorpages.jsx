import React from "react";
import { Link } from "react-router";

const Errorpages = () => {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      <h1 className="text-7xl font-extrabold text-[#244d3f]">404</h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-red-400 text-white rounded-lg shadow hover:bg-red-600 transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default Errorpages;