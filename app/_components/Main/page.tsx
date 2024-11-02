import React from "react";

const page = () => (
  <div className="w-[40%] p-6 bg-slate-200">
    <div className="mb-8">
      <h2 className="text-xl font-semibold">Design / Development / Testing</h2>
      <p className="text-gray-500">Working on new product</p>
      <p className="text-gray-400 text-sm">3 months ago</p>
    </div>
    <h3 className="text-lg font-bold">My Stories</h3>
    <div className="bg-pink-100 p-4 rounded-lg mt-4">
      <p>
        "Work hard for what you want because it won't come to you without a
        fight..."
      </p>
      <p className="mt-2 font-semibold">- John Doe</p>
    </div>
    <div className="mt-6 flex flex-wrap gap-2">
      {/* Tags */}
      <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">Design</span>
      <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
        Development
      </span>
      {/* Add more tags */}
    </div>
  </div>
);

export default page;
