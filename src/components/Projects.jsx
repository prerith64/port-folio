import React from 'react'

import { PROJECTS } from '../constants'
const Projects = () => {
  return (
    <div className=' my-[100px] w-full '>
       <div className='text-center mb-[50px]'><h1  className='text-4xl mb-[50px]'>Projects</h1></div>
       <div className='flex gap-6 exp   overflow-x-scroll'>
        {PROJECTS.map(item=>(
           <div key={item.title} className='  my-[60px] min-w-[400px] card  gap-4 flex flex-col rounded-lg p-[16px] hover-card' >
           <img src={item.image} alt="load..." />
           <div className='flex gap-4 flex-wrap'>
           {item.technologies.map((i,index)=>(
            <span key={index} className='label ' >{i}</span>
           ))}
           </div>
           <div>
           <h1 className='text-2xl font-bold'>{item.title}</h1>
           <p  className='text-sm' >{item.duration}</p>
           </div>
           <p className='text-lg text-justify'>{item.description}</p>
          
       </div>
        ))}
       </div>
      <div>

      </div>
    </div>
  )
}

export default Projects
