import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'
import Technologies from './components/Technologies'
import Educations from './components/Educations'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
      <div  className='overflow-x-hidden text-neutral-300 antialiased  selection:bg-white  selection:text-black'>
        <div className='fixed top-0 -z-10 h-full w-full' >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
        </div>
        <div  className='container w-[90%] mx-auto px-8'>
        <Navbar />
        <Profile />
        <About />
        <Technologies />
        <Educations />
        <Projects />
        <Contact />
        </div>
    
      </div>
  )
}

export default App
