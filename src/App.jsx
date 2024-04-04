import React, { useEffect, useState } from 'react'
import DesktopSidebar from './components/DesktopSidebar'
import Home from './pages/Home'
import CodingProfile from './pages/CodingProfile'
import Projects from './pages/Projects'
import Loader from './components/Loader'
import ArtGallery from './pages/ArtGallery'
import MobileNavbar from './components/MobileNavbar'
import Footer from './components/Footer'

const pages = [
  { id: 'home', component: <Home /> },
  { id: 'projects', component: <Projects /> },
  { id: 'coding', component: <CodingProfile /> },
  // { id: 'gallery', component: <ArtGallery /> },  
]

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      openPage(0);
    }, 4500);
  }, []);

  useEffect(() => {
    console.log('Page:', page);
  }, [page]);

  const openPage = (page) => {
    setHide(true);
    setTimeout(() => {
      setHide(false);
      setPage(page);
    }, 500);
  }

  const callback = (newPage) => {
    if (newPage == page) return;
    openPage(newPage);
  }

  return (
    (showLoading ?
      <div className='h-screen w-full flex justify-center items-center'>
        <Loader />
      </div> :
      <div className='flex items-center box-border flex-col w-full '>
        <DesktopSidebar callback={callback} />
        <MobileNavbar />
        <div className='relative flex items-center w-full flex-col gap-2 rounded-md box-border'>
          <div className={`${hide ? 'opacity-0' : 'opacity-100'} transition-all flex flex-col items-center justify-center w-11/12 lg:w-4/5 2xl:w-3/5`}>
            <div className="max-md:hidden w-full">
              {pages[page].component}
            </div>
            <div className="lg:hidden w-full">
              {pages.map((page, index) => (<div key={index} id={page.id}>{page.component}</div>))}
            </div>
          </div>
        </div >
        <div className="w-screen md:hidden mt-10">
          <Footer />
        </div>
      </div>)
  )
}

export default App