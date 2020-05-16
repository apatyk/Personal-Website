import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
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
                <img src={logo} alt="Adam Patyk"/>
              </Link>
            </div>
            <div className="navbar__start">
              <Link className={`navbar__item ${pathname === '/' && 'active'}`} to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Home</title>
                  <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/>
                </svg>
              </Link>
              <Link className={`navbar__item ${pathname.includes('portfolio') && 'active'}`} to="/portfolio">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Photography Portfolio</title>
                  <path xmlns="http://www.w3.org/2000/svg" d="M9,12.9c0,1.7,1.3,3,3,3s3-1.3,3-3s-1.3-3-3-3S9,11.2,9,12.9z M3.1,5.9h0.8c1.4,0,2.6-0.7,3.4-1.8l0.2-0.3  c0.3-0.6,0.9-0.9,1.6-0.9h5.8c0.7,0,1.3,0.3,1.7,0.9l0.2,0.3c0.8,1.1,2,1.8,3.4,1.8H21c1.1,0,2,0.9,2,2.1v11c0,1.1-0.9,2.1-2.1,2.1  H3.1C1.9,21,1,20,1,18.8V8.1C1,6.8,1.9,5.9,3.1,5.9z M20,10c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S19.4,10,20,10z M12,18  c2.8,0,5-2.2,5-5s-2.2-5-5-5s-5,2.2-5,5S9.2,18,12,18z"/>
                  </svg>
              </Link>
              <Link className={`navbar__item ${pathname.includes('web') && 'active'}`} to="/web-design">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Web Design</title>
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z"/>
                </svg>
              </Link>
            </div>
          </div>
        )}
      </Location>
    </nav>
  )
}

export default Navbar
