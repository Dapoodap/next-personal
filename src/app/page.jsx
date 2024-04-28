import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ProjectSection from "@/components/section/ProjectSection";
import SkillSection from "@/components/section/SkillSection";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-28 sm:mt-32">
        <HeroSection />
        <hr className="w-1/2 m-auto my-20 border border-black border-solid border-400 "/>
        <AboutSection/>
        <ProjectSection/>
        <SkillSection/>
      </div>
    </div>
  );
}
