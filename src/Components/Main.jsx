import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'

const Main = () => {
  return (
    <div className='main'>
    <div className="navbar">
      <Navbar />
    </div>
      <div className='home'>
        <Home />
      </div>
    </div>
  )
}

export default Main