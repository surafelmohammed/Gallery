import React from "react";

const page = () => (
  <div className="w-[25%] bg-gray-800 text-white p-6">
    <h1 className="text-3xl font-bold">EPORTFOLIO</h1>
    <p className="mt-4 text-pink-300">Just another WordPress Demo site</p>
    <p className="mt-2">
      "If you look at what you have in life, you'll always have more..."
    </p>
    <button className="mt-4 px-4 py-2 border border-white">ABOUT ME</button>
    <div className="flex mt-6 space-x-4">
      {/* Social Icons */}
      <a href="#">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="#">
        <i className="fab fa-twitter"></i>
      </a>
      {/* Add more icons */}
    </div>
  </div>
);

export default page;
