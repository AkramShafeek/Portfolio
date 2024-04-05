import React, { useEffect, useState } from 'react'
import { links } from '../constants/navigationLinks';
import Tabs from './Tabs';
import Tab from './Tab';

const DesktopSidebar = ({ callback }) => {
  var timeout;

  const [isExpand, setIsExpand] = useState(false);
  const [selected, setSelected] = useState(0);
  const [windowListener, setWindowListener] = useState(true);  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2800);

    return () => clearTimeout(loaderTimeout);
  }, []);

  useEffect(() => {    
    if (windowListener === false)
      return;

    function handleScroll() {
      const home = document.getElementById('home').offsetTop
      const projects = document.getElementById('projects').offsetTop
      const coding = document.getElementById('coding').offsetTop

      const currentScroll = window.scrollY;
      let newSelected = 0;


      if (currentScroll >= home && currentScroll < projects)
        newSelected = 0;
      if (currentScroll >= projects - 100 && currentScroll < coding)
        newSelected = 1;
      if (currentScroll >= coding - 200)
        newSelected = 2;
      
      setSelected(newSelected);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowListener]);

  const handleClick = (itemKey) => {    
    clearTimeout(timeout);
    // disable the window listener to prevent the scroll event from changing the selected tab
    setWindowListener(false);
    setSelected(itemKey);
    timeout = setTimeout(() => setWindowListener(true), 2000);
  }

  return (
    <div className="max-md:hidden fixed top-0 left-0 z-10 p-4 h-full flex flex-col justify-center">
      <div className={`flex flex-col transition-width duration-1000 justify-center h-full ${isExpand ? 'w-52' : 'w-20'} items-start rounded-md`}>
        <div className={`p-4 h-full ${isLoaded ? 'scale-x-100' : 'scale-x-0'} origin-left transition-all bg-white dark:bg-slate-800 rounded-md flex flex-col justify-center items-center`}
          onMouseEnter={() => setIsExpand(true)}
          onMouseLeave={() => setIsExpand(false)}
        >
          <div className="flex flex-col gap-2 lg:gap-8 items-start">
            <Tabs>
              {links.map((link, index) => (
                <Tab
                  key={index}
                  itemKey={index}
                  icon={link.icon}
                  title={link.title}
                  link={link.link}
                  isSelected={selected}
                  isHideTitle={!isExpand}
                  onClick={(itemKey) => handleClick(itemKey)}
                />
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DesktopSidebar
