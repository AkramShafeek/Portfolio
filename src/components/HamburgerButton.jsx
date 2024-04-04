import React from 'react'

const HamburgerButton = () => {
  return (
    <div className='flex flex-col gap-1 w-[20px]'>
      <div className="rounded-md w-full h-[2px] bg-white/65"></div>
      <div className="rounded-md w-full h-[2px] bg-white/65"></div>
      <div className="rounded-md w-full h-[2px] bg-white/65"></div>
    </div>
  )
}

export default HamburgerButton