import React from 'react'
import "../style/hot.css"

import {Link} from 'react-router-dom'
const Hot=()=> {
  return (
  <div className='hot'>
  <Link to="/music">Music store</Link>
  <Link to="/smartDevices">Smart Devices</Link>
  <Link to="/home">Home</Link>
  <Link to="/lifestyle">Lifestyle</Link>
  <Link to="/mobileAccesories">Mobile Accesories</Link>
   </div>
  )
}

export default Hot