import React from 'react'

import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";

export const TECH=[
  {
    icon:<RiReactjsLine />,
    color:'text-cyan-400'
  },
  {
   icon:<RiNodejsLine  />,
     color:'text-green-900'
  },
  {
    icon:<SiExpress  />,
      color:''
   },
   {
    icon:<GrMysql  />,
      color:'text-blue-500'
   },
   {
    icon:<RiTailwindCssFill  />,
      color:'text-blue-300'
   },
  {
    icon:<SiMongodb />,
      color:'text-green-500'
  },
  {
   icon:<SiJavascript />,
     color:'text-yellow-400'
  }
]



const Technologies = () => {
  return (
    <div>
      <h1  className='  text-center text-4xl'>Technologies</h1>
      <div className='flex justify-center gap-4 my-20 flex-wrap' >
        {
          TECH.map((item,i)=>(
            <div key={i} className={` text-7xl ${item.color} rounded-2xl border-4 border-neutral-800 p-4    hover-card `} >
          {item.icon} 
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Technologies
