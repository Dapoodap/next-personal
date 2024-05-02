import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#project" },
    { title: "Skills", href: "#skill" },
    { title: "Experience", href: "#edu" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 z-50 flex flex-row flex-wrap justify-center w-full gap-5 px-5 py-3 transform -translate-x-1/2 bg-gray-500 rounded-none shadow-lg left-1/2 sm:w-fit sm:rounded-full sm:top-5 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      {navLinks.map((link, index) => (
        <motion.a 
          key={index}
          whileHover={{ scale: 1.1 }}
          transition={{ type:'spring',stiffness: 300}}
          href={link.href}
        >
          {link.title}
        </motion.a>
      ))}
    </div>
  );
}

export default Navbar;
