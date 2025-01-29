import React from 'react'

const Contact = () => {
  return (
 
      <div className='  flex flex-col  gap-[100px]  items-center'> 
      <div  className='flex flex-col text-center ' ><h1 className='text-4xl'>Contacts</h1> <p className='text-xl'>Feel free to reach out to me for any questions or opportunities!</p></div>
      <div className='flex flex-col max-w-[600px] w-[95%]  gap-6 p-8  contact-size rounded-2xl'>
        <h1 className='text-3xl  font-bold' >Email Me</h1>
          <input className='p-4   rounded-2xl contact-size text-2xl input-field' placeholder='Email' type="email" />
          <input className='p-4 rounded-2xl contact-size text-2xl input-field' placeholder='Name' type="text" />
          <input className='p-4 rounded-2xl contact-size text-2xl input-field'  placeholder='subject' type="text" />
          <input className='p-4 rounded-2xl contact-size text-2xl input-field'  placeholder='Message' type="text" />
          <button className='bg-[blue] p-4 text-2xl rounded-2xl' type="submit" >Submit</button>
      </div>
    </div>

/* <div className='my-[100px]  flex flex-col gap-[100px] justify-center '>
    <div className='contact-size flex  flex-col'>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    </div> */
  )
}

export default Contact
