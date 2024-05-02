'use client'
import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // Import icon components
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ProjectSection from "@/components/section/ProjectSection";
import SkillSection from "@/components/section/SkillSection";
import EduExp from "@/components/section/EduExp";
import ContactSection from "@/components/section/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      // Change to dark mode
      document.documentElement.classList.add("dark");
    } else {
      // Change to light mode
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="fixed z-50 bottom-4 right-4">
        <motion.button
        whileTap={{ 
          scale:1.2
         }}
          className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg focus:outline-none dark:bg-gray-800"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FiSun className="text-yellow-500 dark:text-yellow-300" />
          ) : (
            <FiMoon className="text-gray-200 dark:text-gray-300" />
          )}
        </motion.button>
      </div>
      <div className="mt-28 sm:mt-32">
        <HeroSection />
        <hr className="w-1/2 m-auto my-20 border border-black border-solid border-400 dark:border-gray-600" />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <EduExp />
        <ContactSection />
        <Footer/>
      </div>
    </div>
  );
}
