import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Home from './Home'
const Hero = () => {
  return (
    <>
    <Home/>
    <div className=' bg-[#051f48] py-4 text-white  flex items-center'>
        
    <Row className='w-full'>
         <Col lg={6} md={6} sm={12} className='mt-24'>
             
             <div className=''>
                  <h1 className='text-4xl ms-12'>We are Outdoor Media Solutions</h1>
                  <p className=' w-3/4 ms-14 mt-10'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid vel nesciunt alias, excepturi, atque laudantium expedita ducimus repellat, animi sed reprehenderit sit molestiae suscipit ipsa dicta et tenetur id.
                  </p>
             </div>
             
        </Col>

          <Col lg={6} md={6} sm={12}>
             
             <div className='flex justify-center items-center'>
               <div className='w-[8rem] mt-28 h-[8rem] border rounded-full bg-[#E1F5F3]  '>
                
                </div>
   
                <div className='w-[15rem] ms-3 mt-10 h-[15rem] place-items-center border rounded-full bg-[#00C6C1]'>
                  
                </div>
             </div>

             <div className='w-[10rem] ms-24 h-[10rem] border rounded-full bg-[#E1F5F3]'>
                 
             </div>
            
          </Col>
         </Row>

    
    </div>
    </>
  )
}

export default Hero