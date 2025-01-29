import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react"
const About = () => {
  return (
    // <div  className='w-full  ' >
    //   <h1 className='text-4xl text-center my-20' >About Me</h1>
    //     <div className='flex flex-wrap    flex-end'>
    //         <div  className='w-1/2 ' >
    //             <img   src={aboutImg} alt="" />
    //         </div>
    //         <div className='w-1/2' >
    //             <p className='text-justify  my-2 py-6 text-sm  lg:text-xl ' >{ABOUT_TEXT}</p>
    //         </div>
    //   </div>
    // </div>

   <div  className='w-full my-20' >
        <h1 className='text-4xl text-center my-20' >About Me</h1>
         <div  className='flex flex-wrap gap-6  justify-center' >
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
            className='w-[300px] lg:w-[500px]' >
            <img src={aboutImg} alt="" />
            </motion.div>
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
            className='flex-1 mx-6 basis-[300px] w-[300px] ' >
                <p className='text-justify text-sm  my-2 py-6 lg:text-xl'>{ABOUT_TEXT}</p>
            </motion.div>
         </div>
   </div>

  )
}

export default About
