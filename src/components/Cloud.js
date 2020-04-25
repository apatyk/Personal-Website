import React from 'react'
import PropTypes from 'prop-types'

import './Cloud.scss'

const Cloud = ({
  top,
  left,
  delay
}) => {
  const styling = {
    top: top,
    left: left,
    "animation-delay": delay,
  };

  return (
    <div className="cloud" style={styling}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100" 
          height="auto" 
          viewBox="0 0 24 24">
            <path class="st0" d="M12,3c-4,0-7.3,3.1-7.5,7.1C2,10.6,0,12.8,0,15.5c0,3,2.5,5.5,5.5,5.5h13c3,0,5.5-2.5,5.5-5.5c0-2.7-2-4.9-4.5-5.4C19.3,6.1,16,3,12,3z"/>
        </svg>
    </div>
  )
}

Cloud.propTypes = {
  top: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired
}

export default Cloud