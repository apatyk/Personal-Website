import React from 'react'
import PropTypes from 'prop-types'

import Cloud from './Cloud'

import './CenteredCard.scss'

const CenteredCard = ({ 
  content, children 
}) => {
  return (
    <div className="centered-card-container">
      <div 
        className="centered-card" 
        dangerouslySetInnerHTML={{ __html: content }}>
      </div>
      {children}
      <Cloud top="0" left="-15vw" delay="0s"></Cloud>
      <Cloud top="15vh" left="-15vw" delay="20s"></Cloud>
      <Cloud top="30vh" left="-15vw" delay="10s"></Cloud>
      <Cloud top="45vh" left="-15vw" delay="5s"></Cloud>
    </div>
  )
}

CenteredCard.propTypes = {
  content: PropTypes.object.isRequired
}

export default CenteredCard