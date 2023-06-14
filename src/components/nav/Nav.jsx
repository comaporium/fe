import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsBarChartSteps} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
      <a href="#newItems" onClick={()=> setActiveNav('#newItems')} className={activeNav === "#newItems" ? "active" : ""}><BsBarChartSteps /></a>
      <a href="#accesories" onClick={()=> setActiveNav('#accesories')} className={activeNav === "#accesories" ? "active" : ""}><AiOutlineSearch /></a>
    </nav>
  )
}

export default Nav