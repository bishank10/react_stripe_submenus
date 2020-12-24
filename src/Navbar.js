import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
   const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  console.log(data);
  return <nav className="nav">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="stripe" />
        <button className="btn toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li >
          <button className="link-btn">
            products
        </button>
        </li>
        <li >
          <button className="link-btn">
            developers
        </button>
        </li>
        <li >
          <button className="link-btn">
            company
        </button>
        </li>
        <li >
          <button className="link-btn">
            company
        </button>
        </li>
        <button className="btn signin-btn">
          sign in
         </button>
        
      </ul>
    </div>
  </nav >
}

export default Navbar
