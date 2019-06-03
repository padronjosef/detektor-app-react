import React from 'react'
import { Link } from 'react-router-dom'

import './styles/NavBar.css'
import logo from '../images/logo.png'

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
          <Link to="/">
            <img className="Navbar_brand-logo" src={logo} alt="logo"/>
          </Link>
      </div>
    )
  }
}

export default NavBar

