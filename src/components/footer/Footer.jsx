import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LINS 2k23</a>

      <ul className='permalinks'>
        <li><a href="#">Naslovna</a></li>
        <li><a href="#newItems">Statistika</a></li>
        <li><a href="#accesories">Tabela</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://github.com"><FiGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; LINS informacije o sudarima. Powered by Nejra and Rijad. All rights to prof. dr. Muhamed Begović.</small>
      </div>
    </footer>
  )
}

export default Footer