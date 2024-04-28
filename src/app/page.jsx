import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/section/HeroSection";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-28 sm:mt-32">
        <HeroSection />
        <hr className="w-1/2 m-auto my-20 border border-black border-solid border-400 "/>
        {/* Tambahkan komponen-komponen lainnya di sini */}
      </div>
    </div>
  );
}
