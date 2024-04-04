import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import {
  cssIcon,
  dockerIcon,
  expressIcon,
  gitIcon,
  htmlIcon,
  javaIcon,
  javascriptIcon,
  mongodbIcon,
  nodejsIcon,
  reactIcon,
  heroBackground,
  githubIcon,
  linkedinIcon
} from '../assets';
import { githubLink, linkedinLink } from '../constants/socialLinks';

const skills = [
  htmlIcon,
  cssIcon,
  javascriptIcon,
  mongodbIcon,
  reactIcon,
  nodejsIcon,
  expressIcon,
  dockerIcon,
  gitIcon,
  javaIcon,
]

const about = "A dedicated Computer Science student skilled in the MERN stack, specializing in full-stack web development. With a strong foundation in Data Structures and Algorithms, I excel in solving complex problems with elegant solutions. Passionate about leveraging technology for innovation, I'm committed to continuous learning and growth"

const HeroComponent = () => {

  const [showSkills, setShowSkills] = useState(false);
  const [skillsArr, setSkillsArr] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillsArr(prevSkills => {
        if (skills.length === prevSkills.length) {
          clearInterval(interval);
          return prevSkills;
        }
        return [...prevSkills, skills[prevSkills.length]];
      });
    }, 100);

    if (showSkills == false)
      clearInterval(interval);
    return () => clearInterval(interval);
  }, [showSkills]);

  useEffect(() => {
    setTimeout(() => {
      setShowSkills(true);
    }, 1000);
  }, []);

  return (
    <div className="lg:h-screen w-full flex max-md:flex-col justify-between max-sm:pt-20 items-center relative max-sm:bottom-20 max-sm:mt-12">
      <div className="w-full rounded-md flex flex-col lg:flex-row justify-between max-md:items-center ">
        <div className="flex justify-center w-11/12 md:w-8/12 lg:justify-start rounded-md overflow-hidden">
          <img src={heroBackground} alt="background-image" style={{
            objectFit: 'cover',
            width: '100%',
            objectPosition: 'center',
            filter: 'saturate(0.6)'
          }} />
        </div>
        <div className="pl-3 rounded-md flex items-center w-4/6 max-sm:w-full">
          <div className='flex flex-col justify-evenly gap-8'>
            <div className='flex flex-col lg:gap-2'>
              <h2 className='text-xl lg:text-2xl font-light'>
                Akram Shafeek
              </h2>
              <h2 className='text-3xl lg:text-5xl font-bold'>
                Software
                <font className='text-emerald-500'> developer</font>
              </h2>
            </div>
            <div className="h-full flex gap-6 flex-col">
              <p className="fond-bold w-10/12 max-sm:w-full text-justify pr-3 text-gray-400 text-sm lg:text-md">
                <b>Hi, I'm Akram </b> <br /> {about}
              </p>
              <div className="flex gap-6 lg:gap-8 items-center w-full">
                <a href={githubLink} target='blank'>
                  <img src={githubIcon} alt="" srcSet="" style={{
                    objectFit: 'contain',
                    filter: 'invert(1)'
                  }} className='w-5 h-5 lg:w-8 lg:h-8' />
                </a>
                <a href={linkedinLink} target='blank'>
                  <img src={linkedinIcon} alt="" srcSet="" style={{
                    objectFit: 'contain',
                    filter: 'invert(1)'
                  }} className='w-6 h-6 lg:w-9 lg:h-9' />
                </a>
                <Button variant='flat' className='rounded-md' color="success" size='sm'>Resume</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-slate-800/70 max-sm:mt-12 ${showSkills ? 'opacity-1 scale-x-100' : 'opacity-0 scale-x-0'} origin-right transition-all rounded-lg justify-center flex flex-wrap lg:flex-col items-center p-2 gap-3 lg:gap-4 lg:p-4 overflow-hidden`}>
        {skills.map((skill, index) =>
          <img src={skill}
            className={`transition-all ${skillsArr.indexOf(skill) !== -1 ? 'opacity-100 scale-100 translate-y-0 translate-x-0' : 'opacity-0 scale-0 translate-y-4 translate-x-20'}`}
            key={index}
            style={{
              width: '25px',
              height: '25px',
              objectFit: 'contain',
            }}
          />
        )}
      </div>
    </div>
  )
}

export default HeroComponent