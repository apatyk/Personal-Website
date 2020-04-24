import React from 'react'
import PropTypes from 'prop-types'

import './CenteredCard.scss'

const CenteredCard = ({ 
  content 
}) => {
  return (
    <div className="centered-card-container">
      <div 
        className="centered-card" 
        dangerouslySetInnerHTML={{ __html: content }}>
      </div>
    </div>
  )
}

CenteredCard.propTypes = {
  content: PropTypes.object.isRequired
}

export default CenteredCard