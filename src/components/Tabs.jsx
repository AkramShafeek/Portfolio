import React from 'react'

const Tabs = ({ selected, onClick, children }) => {
  return (
    <div className='flex gap-4 flex-col'>
      {children}
    </div>
  )
}

export default Tabs