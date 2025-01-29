import React from 'react'
import { motion } from "motion/react"
import {HERO_CONTENT} from '../constants/index'
import porfilePic from "../assets/prerith_photo.png"
const Profile = () => {
  return (
    <div className='container flex my-20  '>
      <div  className='flex  flex-wrap gap-[100px] justify-center'>
       <motion.div 
        initial={{ opacity: 0,
         }}
        whileInView={{ opacity:[0.2,0.6,1],
          x:[-100,0]
         }}
        viewport={{
          amount:"all",
         once:true,
        }}
       transition={{
        duration: 1.5,
      }}
       className='basis-[300px] flex-1' >
       <h1 className='lg:text-5xl text-4xl my-6 font-thin tracking-tight'> Prerith Shetty</h1>
       <span className='bg-gradient-to-r  from-purple-800  to-pink-600 lg:text-4xl text-2xl font-bold  bg-clip-text text-transparent '>MERN Stack Developer</span>
       <p  className='my-2 flex text-justify font-light  tracking-tighter  text-sm  lg:text-xl ' >{HERO_CONTENT}</p>
       </motion.div>
       <motion.div  
     initial={{ opacity: 0,
     }}
    whileInView={{ opacity:[0.2,0.6,1],
      y:[-100,0]
     }}
    viewport={{
      amount:"all",
     once:true,
    }}
   transition={{
    duration: 1.5,
  }}
       className='w-[300px] lg:w-[500px] '>
         <div className='flex h-full bg-profile  justify-center' >
         <img className="w-[400px] h-[400px] rounded-lg " src={porfilePic}   alt="" />
         </div>
       </motion.div>
      </div>
    </div>
  )
}

export default Profile
