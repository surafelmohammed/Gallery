import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";

interface PhotoProps {
  src: string;
  alt: string;
  description: string;
}

const ImageWithHover: React.FC<PhotoProps> = ({ src, alt, description }) => {
  return (
    <div className="relative w-full h-auto overflow-hidden group pb-0.5">
      <Image
        src={src}
        alt={alt}
        layout="responsive" // Adjust to maintain aspect ratio
        width={500} // Set a default width
        height={300} // Set a default height to maintain the aspect ratio
      />
      <div className="absolute inset-0 bg-red-200 opacity-70 transition-transform duration-700 group-hover:scale-x-100 group-hover:scale-y-100 transform scale-x-0 scale-y-0 origin-bottom-left" />
      <div className="m-8 absolute bottom-0 left-0 right-0 flex items-center transform translate-x-full bg-white opacity-95 transition-transform duration-500 group-hover:translate-x-0">
        <div className="p-2 text-center">{description}</div>
      </div>
    </div>
  );
};

export default ImageWithHover;
