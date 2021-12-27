import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Location } from '@reach/router'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
    >
    <Location>
        {({ location: { pathname } }) => (
          <div className="container">
            <div className="navbar__brand">
              <Link to="/" className="navbar__item" title="Logo">
                <StaticImage src='../img/logo.svg' alt="A."/>
              </Link>
            </div>
            <div className="navbar__start">
              <Link className={`navbar__item ${pathname === '/' && 'active'}`} to="/">
                Home
              </Link>
              <Link className={`navbar__item ${pathname.includes('photography') && 'active'}`} to="/photography">
                Photography
              </Link>
              <Link className={`navbar__item ${pathname.includes('web') && 'active'}`} to="/web-design">
                Web Design
              </Link>
              <Link className={`navbar__item ${pathname.includes('code') && 'active'}`} to="/code">
                Code
              </Link>
            </div>
          </div>
        )}
      </Location>
    </nav>
  )
}

export default Navbar
