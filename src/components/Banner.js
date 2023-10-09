import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ children }) => {
  return (
    <>
      <div className="banner flex flex-col justify-center h-[60vh] bg-offwhite bg-[url('../../static/img/trees.svg')] bg-no-repeat bg-top bg-cover">
        {children}
      </div>
    </>
  );
};

Banner.propTypes = { children: PropTypes.node };

export default Banner;
