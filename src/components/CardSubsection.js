import React from 'react'
import PropTypes from 'prop-types'

import './CardSubsection.scss'

import NewImage from './NewImage'

const CardSubsection = ({ 
  subheading, 
  description,
  details,
  image
}) => {
  
  return (
    <div className="card-subsection">
      <h3 className="card-subsection__subheading">{subheading}</h3>
      <p className="card-subsection__description">{description}</p>
      <p className="card-subsection__details">{details}</p>
      {
        !!image ? (
          <NewImage 
            className="card-subsection__image"
            filename={image}  
            alt={subheading}
          />
        ) : (
          null
        )
      }
    </div>
  )
}

CardSubsection.propTypes = {
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string,
  details: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export default CardSubsection