import React from 'react'
import PropTypes from 'prop-types'

import './AboveFoldContent.scss'

const AboveFoldContent = ({ 
  content,
  children
}) => {
  return (
    <>
    <div className="above-fold-container">
      <div 
        className="above-fold-content" 
        dangerouslySetInnerHTML={{ __html: content }}>
      </div>
      {children}
    </div>
    </>
  )
}

AboveFoldContent.propTypes = {
  content: PropTypes.object.isRequired
}

export default AboveFoldContent