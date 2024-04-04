import { Divider } from '@nextui-org/react'
import React from 'react'
import { githubIcon, linkedinIcon, contactSolid } from '../assets';
import { githubLink, linkedinLink, email } from '../constants/socialLinks';

const Footer = () => {
  return (
    <div className="w-full p-5 bg-slate-950/40">
      <div className="flex justify-between p-3 pt-7 text-white/65">
        <div className="flex flex-col p-2 gap-4">
          <a href={linkedinLink} target='_blank' className="flex gap-4">
            <img src={linkedinIcon} alt="github" className='w-[20px] h-[20px] object-cover invert opacity-75' />
            <p>LinkedIn</p>
          </a>
          <a href={githubLink} target='_blank' className="flex gap-4">
            <img src={githubIcon} alt="github" className='w-[20px] h-[20px] object-contain invert opacity-75' />
            <p>GitHub</p>
          </a>
          <a href={email} target='_blank' className="flex gap-4">
            <img src={contactSolid} alt="github" className='w-[20px] h-[20px] object-contain invert opacity-75' />
            <p>Gmail</p>
          </a>
        </div>
        {/* <div className="flex items-end text-white/65 p-2">
          <p className='text-sm'>Back to top</p>
        </div> */}
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-center w-full py-7">
        <div className="text-white/65 text-center">Designed and developed by Akram Shafeek </div>
      </div>
    </div>
  )
}

export default Footer