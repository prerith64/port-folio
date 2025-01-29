import React from 'react'
import logo from '../assets/letter-p.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=' my-10  py-6 items-center flex justify-between' >
        <div className='flex items-center' >
           <img  src={logo} alt="logo.."  className='logo ' />
        </div>
        <div className='flex gap-4  text-2xl  items-center justify-center' >
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar
