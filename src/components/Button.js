import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, link, invert }) => {
  return (
    <div className="button-container w-full flex justify-center my-2 mx-0">
      <a
        href={link}
        className={`button rounded-full py-4 min-w-[14rem] text-center font-bold shadow-xl z-10 ${
          invert
            ? 'bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600'
            : 'bg-white text-darkgray hover:bg-primary-300 hover:text-white active:bg-primary-400'
        }`}
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
