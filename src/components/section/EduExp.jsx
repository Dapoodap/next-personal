import React from 'react';

const EduExp = ({ date, title, description, isLast }) => {
  return (
    <div className="relative w-full px-10 m-auto sm:w-1/2">
      {/* Border line */}
      {!isLast && <div className="absolute top-0 h-full mt-16 border-l-2 border-gray-300 border-solid mx-11 left-5"></div>}
      <div className={`flex ${isLast ? 'mb-0' : 'mb-20'}`}>
        <div className="flex-shrink-0 mr-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
            <p className="text-lg font-semibold year">{date}</p>
          </div>
        </div>
        <div>
          <h2 className="mb-1 text-lg font-semibold">{title}</h2>
          <p className='edu-text'>{description}</p>
        </div>
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
    <div id='edu' className="container py-16 mx-auto">
        <h1  style={{ fontSize:'30px',fontWeight:'500',letterSpacing:'1px',textAlign:'center' }} className='mb-11'>Education and Experience</h1>
      <div className="relative">
        {timelineData.map((item, index) => (
          <EduExp
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
