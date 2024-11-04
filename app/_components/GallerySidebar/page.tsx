import Link from "next/link";
import React from "react";
import ImageWithHover from "./_components/imagewithhover";

const page = () => {
  const images = [
    {
      src: "/images/image1.jpg",
      alt: "Image 1",
      title: "Development / photographer ",
      description: "This is the first image description.",
    },
    {
      src: "/images/image2.jpg",
      alt: "Image 2",
      title: "Title 2",
      description: "This is the second image description.",
    },
    {
      src: "/images/image3.jpg",
      alt: "Image 3",
      title: "Title 3",
      description: "This is the third image description.",
    },
  ];
  const videos = [
    {
      src: "/images/image4.jpg",
      alt: "Image 4",
      title: "Title 4",
      description: "This is the fourth image description.",
    },
    {
      src: "/images/image5.jpg",
      alt: "Image 5",
      title: "Title 5",
      description: "This is the fivth image description.",
    },
  ];

  return (
    <div className="md:w-[40%] flex flex-row gap-1 p-4 md:overflow-y-auto min-w-[400px]">
      <div className="w-1/2">
        {images.map((item, index) => (
          <Link key={index} href={`/gallery/${index + 1}`} passHref>
            <ImageWithHover
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
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
              title={item.title}
              description={item.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default page;
