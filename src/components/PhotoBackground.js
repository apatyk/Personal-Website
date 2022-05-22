import React from 'react'

import './PhotoBackground.scss'

const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const PhotoBackground = ({ clImages }) => {
  if (!clImages) return <></>

  const randomPos = randomGenerator(0, clImages.length - 1)
  const randomImage = clImages[randomPos]

  return (
    <div className="photo-background">
      <img
        className="photo-background__image"
        src={randomImage.node.secure_url}
        alt={randomImage.node.resource_type}
      />
    </div>
  )
}
export default PhotoBackground
