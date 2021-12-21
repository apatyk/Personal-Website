import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ 
  title,
  link
}) => {

  return (
    <div class='button-container'>
      <a href={link} class='button'>
        {title}
      </a>
    </div>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Button