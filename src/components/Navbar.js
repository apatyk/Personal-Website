import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Location } from '@reach/router';
import NavLink from './NavLink';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <nav
        className={`navbar fixed top-0 left-0 w-full h-14 flex justify-end bg-white shadow-lg z-50 ${
          this.state.open && 'open'
        }`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div
          className={`w-8 m-2 mr-4 px-2 py-[0.6rem] cursor-pointer transition z-20 md:hidden`}
        >
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
            <div
              className={`container w-full mt-8 p-4 -z-10 -right-[100vw] fixed flex flex-col transition-[right] md:left-0 md:top-0 md:m-0 md:p-0 md:flex-row ${
                this.state.open && 'open'
              }`}
            >
              <div className="flex justify-center w-8 m-4 fixed top-0 left-0 z-20 md:relative">
                <Link to="/" title="Logo">
                  <StaticImage
                    src="../img/logo.svg"
                    alt="A."
                    loading="eager"
                    placeholder="blurred"
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-center align-center mt-0 md:flex-row">
                <NavLink dest="/" label="Home" />
                <NavLink dest="/photography" label="Photography" />
                <NavLink dest="/web-design" label="Web Design" />
              </div>
            </div>
          )}
        </Location>
      </nav>
    );
  }
}

export default Navbar;
