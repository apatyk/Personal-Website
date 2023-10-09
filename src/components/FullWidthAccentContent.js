import React from 'react';
import PropTypes from 'prop-types';

const FullWidthAccentContent = ({ title, children, ...props }) => {
  return (
    <>
      <div
        className={`full-width-content p-2 bg-primary-600 ${props.className}`}
      >
        <h1 className="full-width-content-title leading-tight text-white px-8 py-2 md:p-inherit">
          {title}
        </h1>
        {children}
      </div>
    </>
  );
};

FullWidthAccentContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FullWidthAccentContent;
