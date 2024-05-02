import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function SkillSection() {
    const skill = [
        'HTML',
        'CSS',
        'Javascript',
        'PHP',
        'python',
        'Laravel',
        'React',
        'Next',
        'Node Js',
        'Express',
        'Hapi',
        'MongoDB',
        'MySql',
        'Git',
        'GCP',
        'Boostrap',
        'Tailwind'
    ]
  return (
    <div id='skill' style={{ height:'100vh' }} className='flex items-center w-full m-auto text-center sm:w-1/2'>
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
        style={{ fontSize:'30px',fontWeight:'500',letterSpacing:'1px' }}>My Skills</motion.h1>
        <div className='flex flex-wrap items-center justify-center gap-2 mt-11'>
            {skill.map((skill,index)=>(
                <>
                <AnimatePresence>
                <motion.div
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
                    delay:(0.1*index)
                   }}
                   viewport={{ once: true }}
                   
                key={index} className='flex items-center justify-center h-8 px-3 py-1 bg-gray-100 border rounded-md skil-wrap bbackdrop-filter backdrop-blur-lg bg-opacity-65 w-fit'>
                <p className='skil-text'>{skill}</p>
            </motion.div>
                </AnimatePresence>
                </>
            ))}
           
        </div>
       </div>
    </div>
  )
}

export default SkillSection