import React from 'react'

import './PhotoTiles.scss'

const PhotoTiles = ( {
  clImages
}) => {

    if (!clImages) return <></>

    return (
        <div className="photo-tiles-container">
          <div className="photo-tiles">
            {clImages && clImages.map((image, index) => (
                <div className="photo-tiles__item" key={`${index}-cl`}>
                  <img className="photo-tiles__image" src={image.node.secure_url} alt={image.node.resource_type}/>
                </div>
              ))
            }
          </div>
        </div>
      )
  }
  export default PhotoTiles
