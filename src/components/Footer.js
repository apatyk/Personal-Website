import React from 'react'

import './Footer.scss'

const Footer = class extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer className="footer">
        <p className="footer__content">Adam Patyk &copy; {this.getYear()}</p>
      </footer>
    )
  }
}

export default Footer
