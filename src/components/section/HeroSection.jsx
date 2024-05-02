import Image from "next/image";
import React from "react";
import me from "../../assets/me.jpg";
import { HiOutlineArrowRight, HiOutlineDownload } from "react-icons/hi";
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { motion } from "framer-motion";

function HeroSection() {
  const goToCV = () => {
    window.open('https://drive.google.com/drive/folders/1ItWNgmq3qskziO_sOfONKXDeOqaTEZLB?usp=drive_link', "_blank");
  };
  const goToWa = () => {
    window.open('https://wa.me/62895360965318', "_blank");
  };
  const variant  = {
    initial : {
      x:100,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1
    }
  }
  return (
    <motion.div
    variants={variant}
    initial='initial'
    whileInView='animate'
    transition={{ 
      duration:2,
      delay:0 
     }}
   id="home" className="flex flex-col items-center justify-center gap-4 ">
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
        style={{ fontSize: "30px", fontWeight: "600",letterSpacing:'1px' }}
        className="w-full p-4 text-center sm:w-1/2"
      >
        Hello, I&apos;m <span className="underline">Daffa</span>. I&apos;m a <span className="underline">junior full-stack developer</span> based in Semarang.
        I enjoy building sites & apps. My focus is building website with robust stack.
      </h1>
      <motion.div
      initial={{ 
        x:100
       }}
       whileInView={{ 
        x:0
        }}
        transition={{ 
          duration:1
         }}
      className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
        <motion.button
        onClick={goToWa}
        whileHover={{ 
          scale:1.08,
          rotate:'5deg'
         }}
         transition={{ 
          duration:0.5
          }}
        className="flex items-center justify-center px-4 py-2 text-white bg-black rounded-lg focus:outline-none focus:ring focus:border-blue-300">
          Contact Me Here <HiOutlineArrowRight className="w-5 h-5 ml-2" />
        </motion.button>
        <motion.button
        onClick={goToCV}
        whileHover={{ 
          scale:1.08,
          rotate:'-5deg'
         }}
         transition={{ 
          duration:0.5
          }}
        className="flex items-center justify-center px-4 py-2 text-black bg-white rounded-lg focus:outline-none focus:ring focus:border-green-300">
          Download CV <HiOutlineDownload className="w-5 h-5 ml-2" />
        </motion.button>
        <div className="flex flex-col gap-3 mx-2 sm:flex-row">
        <motion.a
        whileHover={{ 
          scale:1.08,
          rotate:'5deg'
         }}
         transition={{ 
          duration:0.5
          }}
        href="https://github.com/Dapoodap"><SiGithub className="w-10 h-10" /></motion.a>
      <motion.a
      whileHover={{ 
        scale:1.08,
        rotate:'-5deg'
       }}
       transition={{ 
        duration:0.5
        }}
      href="https://www.linkedin.com/in/daffapwp/"><SiLinkedin className="w-10 h-10" /></motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
