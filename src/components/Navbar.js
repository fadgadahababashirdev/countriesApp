import React from 'react'
import { FaSun } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
         <div className="navbar navbar-expand-sm navbar-light d-flex justify-content-between  container">
         <div className="col-sm-6"><h2 className='font-arial'>Where in the world</h2></div>
         <div><FaSun/></div>
       </div>
    </nav>
  )
}

export default Navbar