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
              <Link className={`navbar__item ${pathname.includes('photography') && 'active'}`} to="/photography">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Photography Portfolio</title>
                  <path d="M5 4h-3v-1h3v1zm8 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-5v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm13 4c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"/>
                </svg>
              </Link>
              <Link className={`navbar__item ${pathname.includes('web') && 'active'}`} to="/web-design">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Web Design</title>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z"/>
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
