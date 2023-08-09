import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({title, link, invert}) => {
  return (
    <div className="button-container">
      <a
        href={link}
        className={`button ${invert && 'inverted'}`}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  invert: PropTypes.bool,
};

export default Button;
