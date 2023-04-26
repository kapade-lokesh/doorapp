import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Hero from './Hero'
const Routing = () => {
  return (
    <>
      
     <Router>
          
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/Register' element={<Register/>}/>    
            
        </Routes>   
        
     </Router> 
      
    </>
  )
}

export default Routing