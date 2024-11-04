import { Button, Card, Carousel, Form, Input } from "antd";
import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const page = () => {
  const images = [
    {
      src: "/images/image1.jpg",
      alt: "Image 1",
      title: "Title 1",

      description: "This is the first image description 1.",
    },
    {
      src: "/images/image2.jpg",
      alt: "Image 2",
      title: "Title 2",
      description: "This is the second image description 2.",
    },
    {
      src: "/images/image3.jpg",
      alt: "Image 3",
      title: "Title 3",

      description: "This is the third image description 3.",
    },
  ];
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };
  return (
    <div className="md:w-[35%] bg-slate-200 flex-1 scrollable-element scrollbar-hidden md:overflow-y-scroll h-auto p-4">
      <Carousel autoplay>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center h-[400px]"
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-6 text-center">
              <p>{image.description}</p>
            </div>
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

      <h3 className="text-lg font-bold underline mb-2">My Stories</h3>
      <div className="flex justify-start items-center gap-4">
        <img src={images[2].src} className="rounded-full w-20 h-20" />
        <FaFacebookF className="text-4xl text-white rounded-full bg-blue-600  p-2" />
        <BiLogoLinkedin className="text-4xl text-white rounded-lg bg-blue-600 p-2" />
        <FaInstagram className="text-4xl text-red-400 rounded-full bg-white p-2" />
        <FaYoutube className="text-4xl text-red-600 rounded-full bg-white p-2" />
      </div>
      <div className="bg-pink-100 p-4 rounded-lg mt-4">
        <p>
          "Work hard for what you want because it won't come to you without a
          fight. You have to be strong and courageous and know that you can do
          anything you put your mind to. if somebody puts you down or criticizes
          just keep on beliving in yourself and turn in into somethings
          positive."
        </p>
        <p className="mt-2 font-semibold">- John Doe</p>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <h3 className="text-lg font-bold underline mb-2">Contact Me</h3>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="width-full"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please enter your subject" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Your Message"
            name="description"
            rules={[{ required: true, message: "Please enter a Message" }]}
          >
            <Input.TextArea placeholder="Enter a description" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <h3 className="text-lg font-bold underline mb-2 mt-10">Follow Me</h3>
        <div className="flex justify-center items-center gap-4 bg-white py-4 rounded-xl">
          <FaFacebookF className="text-5xl text-white rounded-full bg-blue-600  p-2" />
          <BiLogoLinkedin className="text-5xl text-white rounded-lg bg-blue-600 p-2" />
          <FaInstagram className="text-5xl text-red-400 rounded-full bg-white border-2 p-2" />
          <FaYoutube className="text-5xl text-red-600 rounded-full bg-white border-2 p-2" />
        </div>
        <h3 className="text-lg font-bold underline mb-2 mt-10">Client Says</h3>
        <div className="flex justify-start items-end gap-4">
          <img src={images[2].src} className="rounded-full w-20 h-20" />
          <div className="flex-col">
            <div>
              <h1 className="font-bold">Jashon Doe</h1>
              <span className="text-sm text-orange-300">
                CEO / Managing Director
              </span>
            </div>
            <div className="flex gap-4">
              <FaFacebookF className="text-4xl text-white rounded-full bg-blue-600  p-2" />
              <BiLogoLinkedin className="text-4xl text-white rounded-lg bg-blue-600 p-2" />
              <FaInstagram className="text-4xl text-red-400 rounded-full bg-white p-2" />
            </div>
          </div>
        </div>

        <div className="bg-pink-100 p-4 rounded-lg mt-4">
          <p>
            "Work hard for what you want because it won't come to you without a
            fight. You have to be strong and courageous and know that you can do
            anything you put your mind to. if somebody puts you down or
            criticizes just keep on beliving in yourself and turn in into
            somethings positive."
          </p>
          <p className="mt-2 font-semibold">- John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default page;
