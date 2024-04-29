import React from 'react'

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
    <div id='skill' className='w-full m-auto mb-20 text-center sm:w-1/2'>
        <h1  style={{ fontSize:'30px',fontWeight:'500',letterSpacing:'1px' }}>My Skills</h1>
        <div className='flex flex-wrap items-center justify-center gap-2 mt-11'>
            {skill.map((skill,index)=>(
                <>
                <div key={index} className='flex items-center justify-center h-8 px-3 py-1 bg-gray-100 rounded-md skil-wrap bbackdrop-filter backdrop-blur-lg bg-opacity-65 w-fit'>
                <p className='skil-text'>{skill}</p>
            </div>
                </>
            ))}
           
        </div>
    </div>
  )
}

export default SkillSection