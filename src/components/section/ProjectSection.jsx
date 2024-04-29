import React from "react";
import me from "../../assets/me.jpg";
import kos from "../../assets/projkos.png";
import Image from "next/image";

function ProjectSection() {
  return (
    <div id="project" className="w-full mx-auto mb-20 text-center md:w-1/2">
      <h1  style={{ fontSize:'30px',fontWeight:'500',letterSpacing:'1px' }}>My Project</h1>
      <div className="flex flex-col items-center gap-3 p-5 mt-8 sm:p-0">
        <div className="grid grid-cols-1 gap-4 p-5 bg-gray-500 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 md:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src={kos}
              alt="Picture of the author"
              objectFit="cover"
              className="rounded-lg"
              width={300}
              height={200}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h2 className="mb-2 text-xl font-semibold">The Coldest Sunset</h2>
              <p className="text-base proj-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex flex-wrap mt-4">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #photography
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #travel
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #winter
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectSection;
