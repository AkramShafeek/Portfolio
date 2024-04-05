import React from 'react'

const Tab = ({ icon, title, link, isSelected, itemKey, onClick, isHideTitle }) => {
  return (
    <a href={`#${link}`} onClick={() => onClick(itemKey)}>
      <div className={`overflow-hidden ${isHideTitle ? 'w-10 ' : 'w-36'} transition-all rounded-md`}>
        <div className={`flex gap-3 overflow-hidden w-36 p-2 rounded-md ${isSelected === itemKey ? 'bg-emerald-500' : 'transparent'} origin-left transition-all`}>
          <div className="w-5 h-5">
            <img src={icon} style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'invert(1)',
            }} />
          </div>
          <p className={`font-bold text-sm ${isHideTitle ? 'opacity-0 ' : 'opacity-1 block'} origin-left transition-all whitespace-nowrap`} >{title}</p>
        </div>
      </div>
    </a>
  )
}

export default Tab