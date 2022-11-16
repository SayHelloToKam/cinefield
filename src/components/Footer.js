import React,{useContext} from 'react'
import '../styles/footer.css'
import { ThemeContext } from '../contexts/ThemeContext';
import {Link} from 'react-router-dom'

function Footer() {
  const {darkMode,setDarkMode}=useContext(ThemeContext)
  return (
    <div className='footer-container'>
      <button onClick={()=>setDarkMode(!darkMode)}>Light Mode</button>
      <Link to='/contactus'>Contact Us</Link>
      <Link to='/aboutus'>About Us</Link>
    </div>
  )
}

export default Footer