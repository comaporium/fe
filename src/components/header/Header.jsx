import React from 'react'
import './header.css'
import CTA from './CTA'
import LOGO from '../../assets/logo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Dobro došli</h5>
        <h1>LINS 2k23</h1>
        <h5 className="text-light">by Nejra and Rijad</h5>
        <CTA />
        <HeaderSocials />
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
        <a href="#newItems" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header