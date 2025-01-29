import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from "motion/react"
const Educations = () => {
 
  return (
    <div className='my-[100px] w-full '>
      <div className='text-center'><h1  className='text-4xl mb-[50px]'>Education</h1></div>
     <div  className='timeline'>
       {
        EDUCATION.map(item=>(
          <div key={item.id} className='mb-[100px]'>
       <div className='dot'></div>
       <motion.div 
       initial={{ opacity: 0,
       }}
      whileInView={{ opacity:[0.2,0.6,1],
        x:[100,0]
       }}
      viewport={{
        amount:"all",
       once:true,
      }}
     transition={{
      duration: 1.5,
    }}
        className='timeline-item  ' >
        <h1 className='text-xl font-bold' >{item.year}</h1>
       <h1 className='text-xl'>{item.class}</h1>
      <div ><span className='mr-4'>College:</span><p className='label' >{item.college}</p></div>
      <div ><span className='mr-4'>Branch:</span><p className='label' >{item.branch}</p></div>
      <div ><span className='mr-4'>Marks:</span><p className='marks' >{item.marks}%</p></div>
       </motion.div>
       </div>
        ))
       }
      

     </div>

    </div>
  )
}

export default Educations
