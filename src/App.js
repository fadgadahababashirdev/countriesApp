import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar';
import Search from './components/Search';
import Filter from './components/Filter';
import AllCountries from './components/AllCountries';
const App = () => {
  return (
    <div> 
    {/* navbar */}
      <Navbar/>
      
      
       <AllCountries/>
       
    </div>
  )
}

export default App
