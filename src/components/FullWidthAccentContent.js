import React from 'react';
import PropTypes from 'prop-types';

import './FullWidthAccentContent.scss';

const FullWidthAccentContent = ({title, children, ...props}) => {
  return (
    <>
      <div className={`full-width-content ${props.className}`}>
        <h1 className="full-width-content__title">{title}</h1>
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
