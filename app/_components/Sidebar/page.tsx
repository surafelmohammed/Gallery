import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Page = () => (
  <div className="w-[25%] relative bg-gray-800 text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('images/image3.jpg')",
        opacity: 0.5, // Set the opacity for the background image
      }}
    ></div>
    <div className="absolute p-6 z-10 ">
      <div className="flex justify-between">
        <TfiMenuAlt className="text-3xl" />
        <div className="flex gap-2">
          <FaFacebookF className="text-xl" />
          <BiLogoLinkedin className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaYoutube className="text-xl" />
        </div>
      </div>
      <div>
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
    </div>
  </div>
);

export default Page;
