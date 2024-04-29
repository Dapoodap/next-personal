import Image from "next/image";
import React from "react";
import me from "../../assets/me.jpg";
import { HiOutlineArrowRight, HiOutlineDownload } from "react-icons/hi";
import { SiGithub, SiLinkedin } from 'react-icons/si';

function HeroSection() {
  return (
    <div id="home" className="flex flex-col items-center justify-center gap-4">
      <div className="relative w-24 h-24">
        <Image
          src={me}
          alt="Picture of the author"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded-full" // just an example
        />
      </div>
      <h1
        style={{ fontSize: "30px", fontWeight: "600" }}
        className="w-full p-4 text-center sm:w-1/2"
      >
        Hello, I&apos;m Daffa. I&apos;m a full-stack developer with 8 years of experience.
        I enjoy building sites & apps. My focus is React (Next.js).
      </h1>
      <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
        <button className="flex items-center justify-center px-4 py-2 text-white bg-black rounded-lg focus:outline-none focus:ring focus:border-blue-300">
          Contact Me Here <HiOutlineArrowRight className="w-5 h-5 ml-2" />
        </button>
        <button className="flex items-center justify-center px-4 py-2 text-black bg-white rounded-lg focus:outline-none focus:ring focus:border-green-300">
          Download CV <HiOutlineDownload className="w-5 h-5 ml-2" />
        </button>
        <div className="flex flex-col gap-3 mx-2 sm:flex-row">
        <a href="https://github.com/Dapoodap"><SiGithub className="w-10 h-10" /></a>
      <a href="https://www.linkedin.com/in/daffapwp/"><SiLinkedin className="w-10 h-10" /></a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
