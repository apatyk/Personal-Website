import React from 'react'
import PropTypes from 'prop-types'

import './CardSubsection.scss'

const CardSubsection = ({ 
  subheading, 
  description,
  details
}) => {
  
  return (
    <div className="card-subsection">
      <h3 className="card-subsection__subheading">{subheading}</h3>
      <p className="card-subsection__description">{description}</p>
      <p className="card-subsection__details">{details}</p>
    </div>
  )
}

CardSubsection.propTypes = {
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string,
  details: PropTypes.string,
}

export default CardSubsection