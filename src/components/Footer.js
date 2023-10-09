import React from 'react';

const Footer = class extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer className="footer flex align-center justify-center w-full bg-primary-600 text-white">
        <p className="footer-content py-2 m-0">
          Adam Patyk &copy; {this.getYear()}
        </p>
      </footer>
    );
  }
};

Footer.displayName = 'Footer';

export default Footer;
