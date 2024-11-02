import Link from "next/link";
import React from "react";
import ImageWithHover from "./_components/imagewithhover";

const page = () => {
  const images = [
    {
      src: "/images/image1.jpg",
      alt: "Image 1",
      description: "This is the first image description.",
    },
    {
      src: "/images/image2.jpg",
      alt: "Image 2",
      description: "This is the second image description.",
    },
    {
      src: "/images/image3.jpg",
      alt: "Image 3",
      description: "This is the third image description.",
    },
  ];
  const videos = [
    {
      src: "/images/image4.jpg",
      alt: "Image 4",
      description: "This is the fourth image description.",
    },
    {
      src: "/images/image5.jpg",
      alt: "Image 5",
      description: "This is the fivth image description.",
    },
  ];

  return (
    <div className="w-[40%] flex flex-row gap-0.5 p-4 overflow-y-auto">
      <div className="w-1/2">
        {images.map((item, index) => (
          <Link key={index} href={`/gallery/${index + 1}`} passHref>
            <ImageWithHover
              key={index}
              src={item.src}
              alt={item.alt}
              description={item.description}
            />
          </Link>
        ))}
      </div>
      <div className="w-1/2">
        {videos.map((item, index) => (
          <Link key={index} href={`/gallery/${index + 1}`} passHref>
            <ImageWithHover
              key={index}
              src={item.src}
              alt={item.alt}
              description={item.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default page;
