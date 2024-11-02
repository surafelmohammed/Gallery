import { Card, Carousel } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

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
  return (
    <div className="w-[35%] bg-slate-200 flex-1 scrollable-element scrollbar-hidden overflow-y-scroll h-auto p-4">
      <Carousel autoplay>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <Card
              hoverable
              style={{ height: 400 }}
              cover={<img alt={image.alt} src={image.src} />}
            >
              <Meta title={image.alt} description={image.description} />
            </Card>
          </div>
        ))}
      </Carousel>
      <div className="mb-8">
        <h2 className="text-xl font-semibold">
          Design / Development / Testing
        </h2>
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
        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
          Design
        </span>
        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
          Development
        </span>
        {/* Add more tags */}
      </div>
    </div>
  );
};

export default page;
