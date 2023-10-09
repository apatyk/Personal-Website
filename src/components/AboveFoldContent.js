import React from 'react';
import PropTypes from 'prop-types';

const AboveFoldContent = ({ fullWidth, content, children, ...props }) => {
  return (
    <>
      <div
        className={`above-fold-container z-10 h-max px-4 py-2 md:p-8 flex flex-col grow ${
          fullWidth ? 'max-w-full' : 'max-w-prose'
        } ${props.className}`}
      >
        <div
          className={`above-fold-content z-10`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        {children}
      </div>
    </>
  );
};

AboveFoldContent.propTypes = {
  children: PropTypes.node,
  content: PropTypes.object,
};

export default AboveFoldContent;
