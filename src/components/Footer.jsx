import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const Footer = () => {

   const[click,setClick] = useState(true)

   const handleClick=(e)=>{
       setClick(!click)
   }

  return (
    <>
     
     {/* <div className='w-full h-[100px]'>
          <div className=' border-2 max-w-[1250px] border-black w-full  flex justify-between  items-center m-auto h-1/2'>
              
             <div className='font-bold text-black text-2xl'>
                LOgo
             </div>

             <div className='absolute md:flex md:text-[#8338EC]  gap-10 items-center'>
                 <ul className=' hidden  gap-4 font-bold  md:flex '>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>Our Goals</li>
                 </ul>

                 <div>
                 <button className=' hidden lg:block md:block bg-[#8338EC] text-white w-32 px-2 py-2 me-2 rounded'>Sign-up</button>
                 <div className='sm:block md:hidden lg:hidden' onClick={handleClick}>
                 {click?<FaBars size={30}></FaBars>:<FaTimes size={30}></FaTimes>}
                 </div>
             </div>
             </div>

          </div>
     </div>

 */}


      <header className=' text-black   h-[50px] mt-3'>
          
          <nav className='flex justify-between m-auto w-[98%] md:flex md:justify-between md:items-center  '> 
             
             <div className='font-bold text-2xl'>
                 L0go
             </div>
             
             <div className={`absolute  ${click ? "top-[10%]  duration-500 w-full " : "-top-[100%]  duration-500 "} md:static`}>
                  <ul className='flex flex-col space-y-9 w-[400px] cursor-pointer  font-semibold items-center  md:w-full md:space-y-0 md:p-3  md:flex-row md:space-x-4'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>Our Goals</li>
                  </ul>
             </div>

             <div  className='cursor-pointer flex justify-center'>
                 <button className='bg-[#8338EC] px-2 py-2 me-3 md:px-4 md:py-2 rounded text-white'>Get Start</button>

                 <div className='md:hidden mt-1' onClick={handleClick}>
             {click?<FaTimes size={30}></FaTimes>:<FaBars size={30}></FaBars>}
             </div>
             </div>

            
          </nav>

      </header>
    </>
  )
}

export default Footer