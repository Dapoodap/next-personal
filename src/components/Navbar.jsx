import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 z-50 flex flex-row flex-wrap justify-center w-full gap-5 px-5 py-3 transform -translate-x-1/2 bg-gray-500 rounded-none shadow-lg left-1/2 sm:w-fit sm:rounded-full sm:top-5 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#project">Projects</a>
      <a href="#skill">Skills</a>
      <a href="#edu">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default Navbar;
