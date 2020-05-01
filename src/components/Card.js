import React from 'react'
import PropTypes from 'prop-types'

import Banner from '../components/Banner'

import './Card.scss'

const Card = ({ 
  content 
}) => {
  return (
    <div className="card-container">
      <div 
        className="card" 
        dangerouslySetInnerHTML={{ __html: content }}>
      </div>
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.object.isRequired
}

export default Card