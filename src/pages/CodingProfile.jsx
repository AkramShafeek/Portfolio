import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react';
import { profiles, totalSolved, desc } from '../constants/codingProfiles';

const ProfileCard = ({ img, platform, title, rating, problemsSolved, link, textColor, color }) => {
  return (
    <div className="w-64 rounded-md bg-slate-800 flex justify-center items-center p-3 flex-col">
      <div className="p-6 rounded-md w-full flex flex-col items-center coding-logo-bg">
        <div className="w-10 h-10 flex gap-4 items-center">
          <img src={img} style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }} />
        </div>
        <p className='font-bold text-xl text-slate-800'>{platform}</p>
      </div>
      <div className="flex flex-col items-start w-full">
        <p className={`mt-5 font-bold text-xl ml-3`} style={{ color: textColor }}>{title}</p>
        <p className='ml-3 mt-3 text-slate-300 font-semibold'>Max Rating: {rating}</p>
        <p className='ml-3 text-slate-300 font-semibold'>Problems solved: {problemsSolved}</p>
        <a href={link} className="w-full mt-6" target='blank'>
          <Button fullWidth className={`rounded-sm`} style={{ borderRadius: '6px', background: color }}>
            <b>See profile</b>
          </Button>
        </a>
      </div>
    </div>
  )
}


const CodingProfile = () => {

  const [problemsSolved, setProblemsSolved] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProblemsSolved(prevProblemsSolved => {
        if (prevProblemsSolved === totalSolved) {
          clearInterval(interval);
          return prevProblemsSolved;
        }
        return prevProblemsSolved + 1;
      });
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-4 gap-12 box-border min-h-screen">
      <h2 className='text-5xl max-sm:text-3xl font-bold'>
        Coding <font className='text-emerald-500'> Profiles</font>
      </h2>

      <div className="flex max-sm:flex-col justify-around gap-12">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center">
        <h2 className='text-3xl max-sm:text-xl font-semibold text-slate-500'>
          Problems solved
        </h2>
        <h2 className='text-3xl font-bold text-emerald-500'>
          {problemsSolved}+
        </h2>
      </div>
      <div className='rounded-md overflow-hidden text-justify'>
        <p className='text-slate-400 text-center max-sm:text-justify'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default CodingProfile