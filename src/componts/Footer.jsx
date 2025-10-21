import React from 'react'
import { GiFlowerPot } from "react-icons/gi";
import { GiFlowerHat } from "react-icons/gi";
import'./Header.css'
function Footer() {
  return (
    <div id='footer' className='text-center p-3 bg- text-light' style={{backgroundColor:'#2C3E50'}}>

          <p className="mb-0"><GiFlowerPot className='Ions'/> Home Garden Tracker © 2025 | Grow with Love <GiFlowerHat className='Ions' /></p>

    </div>
  )
}

export default Footer