import { Button, Divider } from '@nextui-org/react'
import React, { useState } from 'react'
import { links } from '../constants/navigationLinks';
import HamburgerButton from './HamburgerButton';

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='lg:hidden relative p-2 w-full box-border flex flex-col gap-2'>
      <div className={`fixed z-30 top-0 left-0 w-full p-2 ${openMenu ? 'bg-slate-800/50 backdrop-blur-xl' : 'bg-slate-800/50 backdrop-blur-sm'} flex flex-col items-center transition-all`}>
        <div className="w-full flex justify-end">
          <Button size='sm' variant='light' onClick={() => setOpenMenu(prevState => !prevState)}>
            <HamburgerButton />
          </Button>
        </div>
        <div className={`transition-all ${openMenu ? 'h-72' : 'h-0'} w-full overflow-hidden`}>
          <div className={`w-full rounded-md flex flex-col justify-center items-center gap-2 p-2`}>
            {links.map((link, index) => (
              <a href={`#${link.link}`} key={index} className='w-full'>
                <Button size='sm' fullWidth variant='light' onClick={() => setOpenMenu(false)} className='flex gap-3 justify-start'>
                  <img src={link.icon} className='w-[20px] h-[20px] invert opacity-80' />
                  <p>{link.title}</p>
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar