import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

import './GalleryLink.scss'

export const GalleryLink = ({ 
  image,
  title,
  link,
  newTab
}) => {

  return (
    <a href={link} target={newTab && '_blank'}>
      <div className="gallery-link">
        <h2 className="gallery-link__text">{title}</h2>
        <Image 
          className="gallery-link__image"
          image={image}  
          alt={title}
        />
      </div>
    </a>
  )
}

GalleryLink.defaultProps = {
  newTab: false
}

GalleryLink.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  newTab: PropTypes.bool
}

export default GalleryLink