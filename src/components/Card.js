import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'

const Card = ({ 
  content, 
  background
}) => {
  const noBackground = {
    backgroundImage: 'none',
    paddingBottom: '2rem'
  };

  return (
    <div className="card-container">
      <div 
        className="card" 
        style={background ? null : noBackground }
        dangerouslySetInnerHTML={{ __html: content }}>
      </div>
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.object,
  background: PropTypes.bool.isRequired
}

export default Card