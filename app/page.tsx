"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GallerySidebar from "../app/_components/GallerySidebar/page";
import Main from "../app/_components/Main/page";
import SideBar from "../app/_components/Sidebar/page";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="flex h-screen">
      <SideBar />
      <Main />
      <GallerySidebar />
    </div>
  );
}
