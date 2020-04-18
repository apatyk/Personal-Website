import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

import './GalleryLink.scss'

export const GalleryLink = ({ 
  image,
  title,
  link
}) => {

  return (
    <a href={link}>
      <div className="gallery-link">
        <h2>{title}</h2>
        <Image 
          className="gallery-link__image"
          image={image}  
          alt={title}
        />
      </div>
    </a>
  )
}

GalleryLink.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default GalleryLink