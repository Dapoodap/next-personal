import React from 'react'
import { motion } from 'framer-motion'

function AboutSection() {
  const variantT  = {
    initial : {
      x:-100,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1
    }
  }
  const variantI  = {
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
    <div id='about' style={{ height:'100vh' }} className='flex items-center w-full m-auto mt-40 mb-40 text-center sm:w-1/2'>
        <div className=''>
        <motion.h1
        variants={variantT}
        initial='initial'
        whileInView='animate'
        transition={{duration:1}}
        exit={{ 
          opacity:0
         }}
        style={{ fontSize:'30px',fontWeight:'500',letterSpacing:'1px' }}>About Me</motion.h1>
        <motion.p
        variants={variantI}
        initial='initial'
        whileInView='animate'
        transition={{duration:1}}
        className='p-3 mt-5 konten sm:p-0'>I recently graduated in Computer Science with a focus on Informatics Engineering from Dian Nuswantoro University Semarang. Throughout my studies, I actively participated in university organizations like DNCC and MPM-KM Dian Nuswantoro, fostering my passion for technology. Since my second year, I&apos;ve been dedicated to becoming a skilled full-stack developer, mastering product development, UI/UX design, web and mobile client-side development, RESTful API creation, and Cloud Computing. I enjoy merging technology with creativity to craft visually appealing projects on the frontend and problem-solving to create efficient solutions on the backend.</motion.p>
        </div>
    </div>
  )
}

export default AboutSection