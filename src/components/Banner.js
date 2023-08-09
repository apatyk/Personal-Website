import React from 'react';
import PropTypes from 'prop-types';

import './Banner.scss';

const Banner = ({children}) => {
  return (
    <>
      <div className="banner">{children}</div>
    </>
  );
};

Banner.propTypes = {children: PropTypes.node};

export default Banner;
