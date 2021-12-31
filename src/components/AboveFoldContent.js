import React from 'react'
import PropTypes from 'prop-types'

import './AboveFoldContent.scss'

const AboveFoldContent = ({ 
  content,
  children,
  ...props
}) => {
  return (
    <>
    <div className={`above-fold-container ${props.className}`}>
      <div 
        className={`above-fold-content`}
        dangerouslySetInnerHTML={{ __html: content }}>
      </div>
      {children}
    </div>
    </>
  )
}

AboveFoldContent.propTypes = {
  content: PropTypes.string
}

export default AboveFoldContent