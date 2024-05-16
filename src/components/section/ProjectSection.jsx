import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import kos from "../../assets/project/projkos.png";
import poli from "../../assets/project/poli.png";
import bmi from "../../assets/project/bmi.png";
import pali from "../../assets/project/pali.png";
import mk1 from "../../assets/project/mk1.png";
import mk2 from "../../assets/project/mk2.png";
import greenish from "../../assets/project/projgreenish.png";
import movie from "../../assets/project/skillmovie.png";
import todo from "../../assets/project/todo.png";
import fotoin from "../../assets/project/fotoin.png";
import weatherApp from "../../assets/project/weather.png";
import docAPIBatik from "../../assets/project/docapi.png";
import docAPIGreenish from "../../assets/project/docapi2.png";
import kanban from "../../assets/project/todoR.png";
import pilem from "../../assets/project/pilem.png";

function ProjectSection() {
  const projects = [
    {
      title: "Website Kos Dariz",
      img: kos,
      tools: ["React js", "Express js", "Bostrap", "MySql"],
      desc: "Website for kos (Homestay) management system with web based. The website sustain the manager of the kos (Homestay) manage their property easily.",
      link: "https://github.com/Dapoodap/FE_Skripsi",
      hashtags: ["#Website", "#Homestay", "#Management"]
    },
    {
      title: "Poliklinik Website",
      img: poli,
      tools: ["ReactJs", "Boostrap", "Laravel"],
      desc: "website for polyclinics or health workers such as doctors can make schedules and examine patients who register via the website.",
      link: "https://github.com/Dapoodap/BK_POLIKLINIK_FE",
      hashtags: ["#Website", "#Health", "#Scheduling"]
    },
    {
      title: "BMI Calculator",
      img: bmi,
      tools: ["HTML", "CSS"],
      desc: "Fun project using implementation of javascript for improving logical and problem solving. This project will calculate the user BMI status from their weight and height",
      link: "https://github.com/Dapoodap/BMIcalculator",
      hashtags: ["#Project", "#Calculator", "#BMI"]
    },
    {
      title: "Palindrom Generator",
      img: pali,
      tools: ["HTML", "CSS", "Javasript"],
      desc: "Fun project using implementation of javascript for improving logical and problem solving. This project will detect either the input word is palindrom or not",
      link: "https://github.com/Dapoodap/PalindromGenerator",
      hashtags: ["#Project", "#Generator", "#Palindrom"]
    },
    {
      title: "Personal website Mk.1",
      img: mk1,
      tools: ["HTML", "CSS", "Boostrap", "Javascript"],
      desc: "My first personal website withou any framework and try to make it accessible for everyone.",
      link: "https://github.com/Dapoodap/PersonalWeb",
      hashtags: ["#Website", "#Personal", "#HTML"]
    },
    {
      title: "Personal website Mk.2",
      img: mk2,
      tools: ["React js", "boostrap"],
      desc: "My second personal website withou ReactJs. Im improved the features and try make it nice with react boostrap",
      link: "https://github.com/Dapoodap/personalWeb2",
      hashtags: ["#Website", "#Personal", "#React"]
    },
    {
      title: "Greenish Website",
      img: greenish,
      tools: ["React js", "Express js", "Redux", "Boostrap", "MongoDB"],
      desc: "Website for Greenpeace (rebrand: Greenish) for local activist to promote their event. User also can join the event",
      link: "https://github.com/orgs/FEBE13/repositories",
      hashtags: ["#Website", "#Activism", "#Event"]
    },
    {
      title: "Skilmovie Website",
      img: movie,
      tools: ["HTML", "CSS", "Boostrap", "Javascript", "Asyncrhonous"],
      desc: "Responsive website for movies lover. Using TMDB API, website fetch the movie asynchrnously.",
      link: "https://github.com/Dapoodap/skilmovieApp",
      hashtags: ["#Website", "#Movies", "#Responsive"]
    },
    {
      title: "Todolist React",
      img: todo,
      tools: ["React js", "Redux", "Boostrap", "TMDB API"],
      desc: "TODO List for user can ease managing their life with structured and well organized note. This project implementing redux for state management",
      link: "https://github.com/Dapoodap/TodoListReact",
      hashtags: ["#Project", "#TodoList", "#React"]
    },
    {
      title: "Fotoin Website",
      img: fotoin,
      tools: ["HTML", "CSS", "Javascript"],
      desc: "My first project for college. Fotoin is frontend web without any framework inside it just pure html, css, and js for training.",
      link: "https://github.com/Dapoodap/Joki_Fotoin",
      hashtags: ["#Website", "#Frontend", "#Training"]
    },
    {
      title: "Weather App",
      img: weatherApp,
      tools: ["Next.js", "WeatherAPI.com","TailwindCSS"],
      desc: "Weather App built with Next.js, fetching weather data from WeatherAPI.com.",
      link: "https://github.com/Dapoodap/next-weather-app",
      hashtags: ["#Website", "#Weather", "#Nextjs"]
    },
    {
      title: "Kanban Todo App",
      img: kanban,
      tools: ["React.js", "RecoilJs","TailwindCSS"],
      desc: "This app help user to manage their activies with kanban method. Build with Recoil as the State Management for managing global state.",
      link: "https://github.com/Dapoodap/Todo-Recoil",
      hashtags: ["#Website", "#Kanban", "#Todo"]
    },
    {
      title: "Pilemku App",
      img: pilem,
      tools: ["Next.js", "TMDB_API","TailwindCSS"],
      desc: "Landing page and movies overview for user to check updated movie. Provided data by TMDB",
      link: "https://github.com/Dapoodap/next-movie",
      hashtags: ["#Website", "#Kanban", "#Todo"]
    },
    {
      title: "Restfull API For BAtikfy",
      img: docAPIBatik,
      tools: ["Expressjs", "MySql", "JWT"],
      desc: "Made restAPI and documented the API for Batikfy application. Batikfy is me and my team capstone for bangkit program. The application can detect batik pattern with machine learning approach.",
      link: "https://github.com/orgs/BATIKFY/repositories",
      hashtags: ["#API", "#Documentation", "#Batikfy"]
    },
    {
      title: "Restfull API For Greenish",
      img: docAPIGreenish,
      tools: ["Expressjs", "MySql", "JWT"],
      desc: "Made restAPI and documented the API for Greenish application. Greenish is an application to help environmental activists to organize events and campaigns.",
      link: "https://github.com/FEBE13/BE_Greenish_FinalProject",
      hashtags: ["#API", "#Documentation", "#Greenish"]
    },
  ];

  const goToGithub = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="project" style={{ height: "100%" }} className="flex items-center w-full mx-auto text-center md:w-1/2">
      <div>
        <motion.h1
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          style={{ fontSize: "30px", fontWeight: "500", letterSpacing: "1px" }}
        >
          My Project
        </motion.h1>
        <div className="flex flex-col items-center gap-3 p-5 mt-8 sm:p-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 gap-4 p-5 bg-gray-500 rounded-lg shadow-lg cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-20 md:grid-cols-2 hover:shadow-xl"
              onClick={() => goToGithub(project.link)}
            >
              <div className="flex justify-center">
                <Image
                  src={project.img}
                  alt={project.title}
                  objectFit="cover"
                  className="rounded-lg"
                  width="100%"
                  height={300}
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
                  <p className="text-base proj-text">{project.desc}</p>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-4 ">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
