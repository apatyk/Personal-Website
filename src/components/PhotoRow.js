import React from 'react'
import PropTypes from 'prop-types'

import './PhotoRow.scss'
import Image from './Image'

const PhotoRow = ({ elements }) => {
  return (
    <div className="photo-row">
      {elements.map(({ image, caption }) => (
        <div className="photo-row__element">
          <Image
            className="photo-row__element__image"
            image={image}
            alt={caption}
          />
          <h4 className="photo-row__element__caption">{caption}</h4>
        </div>
      ))}
    </div>
  )
}

PhotoRow.propTypes = {
  elements: PropTypes.array.isRequired,
}

export default PhotoRow
