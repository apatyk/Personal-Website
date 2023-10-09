import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const NavLink = ({ dest, label }) => {
  return (
    <Link
      className="navbar-item text-center p-6 my-4 mx-12 md:px-8 md:py-2 md:mx-0.5 md:my-2 rounded-full font-bold text-lightgray shadow-xl bg-white md:shadow-none hover:text-primary-400 active:text-primary-600 active:bg-gray-200"
      activeClassName="active"
      to={dest}
    >
      {label}
    </Link>
  );
};

NavLink.propTypes = {
  dest: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;
