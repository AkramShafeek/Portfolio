import { Tab, Tabs } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { links } from '../constants/navigationLinks';

const TabItem = ({ icon, title, isExpand, link }) => {

  const [showTitle, setShowTitle] = useState(false);

  return (
    <a href={`#${link}`}>
      <div className="flex gap-3 overflow-hidden py-4">
        <div className="w-5 h-5">
          <img src={icon} style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'invert(1)',
          }} />
        </div>
        {<p className={`${isExpand ? 'opacity-100' : 'opacity-0'} origin-left transition-all`}>{title}</p>}
      </div>
    </a>
  )
}

const DesktopSidebar = ({ callback }) => {

  const [isExpand, setIsExpand] = useState(false);
  const [selected, setSelected] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2800);
  }, []);

  return (
    <div className="max-md:hidden fixed top-0 left-0 z-10 p-4 h-full flex flex-col justify-center">
      <div
        className={`flex flex-col duration-1000 transition-width justify-center h-full ${isExpand ? 'w-52' : 'w-20'} overflow-hidden items-start rounded-md`}
        onMouseEnter={() => setIsExpand(true)}
        onMouseLeave={() => setIsExpand(false)}
      >
        <div className={`p-4 h-full ${isLoaded ? 'scale-x-100' : 'scale-x-0'} origin-left transition-all bg-white dark:bg-slate-800 rounded-md flex flex-col justify-center items-center`}>
          <div className="flex flex-col gap-2 lg:gap-8 items-start">
            <Tabs aria-label="Options" classNames={{
              tabList: "flex flex-col gap-4",
              cursor: "bg-emerald-500",
              tab: "font-bold text-left py-4 text-white",
            }}
              variant='light'
              color='success'
              selectedKey={selected}
              onSelectionChange={(index) => { setSelected(index); callback(index); }}
            >
              {links.map((link, index) =>
                <Tab
                  key={index}
                  title={
                    <TabItem
                      icon={link.icon}
                      title={link.title}
                      isExpand={isExpand}
                      link={link.link}
                    />
                  }
                  onClick={() => callback(index)}
                  className='flex justify-start' />
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopSidebar