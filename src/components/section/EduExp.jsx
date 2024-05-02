import React from 'react';
import { motion } from 'framer-motion';
const EduExp = ({ date, title, description, isLast }) => {
  return (
    <div className="relative w-full px-10 m-auto cursor-pointer sm:w-1/2">
      {/* Border line */}
      {!isLast && <div className="absolute top-0 h-full mt-16 border-l-2 border-gray-300 border-solid mx-11 left-5"></div>}
      <div className={`flex ${isLast ? 'mb-0' : 'mb-20'}`}>
        <div className="flex-shrink-0 mr-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
            <p className="text-lg font-semibold year">{date}</p>
          </div>
        </div>
        <motion.div
        whileHover={{ 
          scale:1.05
         }}
         transition={{ 
          duration:0.3
          }}
        >
          <h2 className="mb-1 text-lg font-semibold">{title}</h2>
          <p className='edu-text'>{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

const VerticalTimeline = () => {
  const timelineData = [
    {
      date: '2022',
      title: 'DNCC Mobile Game',
      description: "Become a member of the DNCC student activity unit (Dian Nuswantoro Computer Club) as a mobile game division",
    },
    {
      date: '2022',
      title: 'React Front End Web Developer | Studi Independen Bersertifikat (MSIB) Kampus Merdeka ',
      description: 'virtual internship with skillvul (pt.impactbyte teknologi edukasi) with a focus on client side web development with react js',
    },
    {
      date: '2023',
      title: 'Cloud Computing Cohort in Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      description: 'incubation of the bangkit program with a focus on cloud computing using GCP as well as creating a backend and deployment system to the cloud',
    },
    {
      date: '2023',
      title: 'Programmer_Males;',
      description: 'join the community as a core academic team which has responsibility for creating training and curriculum for peer learning with community members',
    },
    {
      date: '2024',
      title: 'Computer Lab Assistant;',
      description: 'Became a computer lab assistant for 1 year 4 months since October 2022 with responsibility for assisting lecturers in delivering practical material and handling errors in practice',
    },
    {
      date: '2024',
      title: 'Bachelor Degree',
      description: "completed a bachelor's degree with 3.5 years from Dian Nuswantoro University majoring in informatics with a GPA of 3.82",
    },
  ];

  return (
    <div id='edu' style={{ height:'100%'}} className="container flex items-center mx-auto">
       <div>
       <motion.h1
       initial={{ 
        opacity:0,
        x:-100
       }}
       whileInView={{ 
        opacity:1,
        x:0
        }}
        transition={{ 
          duration:1
         }} 
       style={{ fontSize:'30px',fontWeight:'500',letterSpacing:'1px',textAlign:'center' }} className='mb-11'>Education and Experience</motion.h1>
      <div className="relative">
        {timelineData.map((item, index) => (
          <motion.div
          className='cursor-pointer'
          initial={{ 
            opacity:0,
            x:-100,
            y:-100
          
         }}
         whileInView={{ 
            opacity:1,
            x:0,
            y:0
           
          }}
         
          exit={{ 
            opacity:0
           }}
          transition={{ 
            type:'spring',
            delay:(0.3*index)
           }}
           viewport={{ once: true }}
          key={index}>
            <EduExp
            date={item.date}
            title={item.title}
            description={item.description}
            isLast={index === timelineData.length - 1}
          />
          </motion.div>
        ))}
      </div>
       </div>
    </div>
  );
};

export default VerticalTimeline;
