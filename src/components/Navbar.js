import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Location } from '@reach/router'

import './Navbar.scss'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <nav
        className={`navbar ${this.state.open && 'open'}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={`navbar__hamburger-menu`}>
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={() => this.setState({ open: !this.state.open })}
            width={32}
            height={20}
            strokeWidth={3}
            color="#2E2E2E"
            borderRadius={0}
            animationDuration={0.2}
          />
        </div>
        <Location>
          {({ location: { pathname } }) => (
            <div className={`container ${this.state.open && 'open'}`}>
              <div className="navbar__brand">
                <Link to="/" className="navbar__item" title="Logo">
                  <StaticImage
                    src="../img/logo.svg"
                    alt="A."
                    loading="eager"
                    placeholder="blurred"
                  />
                </Link>
              </div>
              <div className="navbar__start">
                <Link
                  className={`navbar__item ${pathname === '/' && 'active'}`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`navbar__item ${
                    pathname.includes('photography') && 'active'
                  }`}
                  to="/photography"
                >
                  Photography
                </Link>
                <Link
                  className={`navbar__item ${
                    pathname.includes('web') && 'active'
                  }`}
                  to="/web-design"
                >
                  Web Design
                </Link>
              </div>
            </div>
          )}
        </Location>
      </nav>
    )
  }
}

export default Navbar
