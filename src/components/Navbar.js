import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div><Link to ="/">
          Home
        </Link></div>
        <div><Link to="/">
          <img src={logo} alt="logo" className="logo"/>
        </Link></div>
        <div><Link to="/about">
          About
        </Link></div>
      </div>
    </nav>
  )
}

export default Navbar
