import React from 'react';
import img from "./home-image.jpg";
import "./StyleHome.css"

const Home = () => {
  return (
    <div className='home'>
      <img className="img" src={img} alt="a" />
    </div>
  )
}

export default Home