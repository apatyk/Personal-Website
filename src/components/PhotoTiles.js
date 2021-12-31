import React from 'react'

import './PhotoTiles.scss'
import Image from './Image'

const PhotoTiles = ( {
  clImages
}) => {

    if (!clImages) return <></>

    return (
        <div>
          <div className="photo-tiles">
            {clImages && clImages.map((image, index) => (
                <div className="photo-grid__item" key={`${index}-cl`}>
                  <img className="photo-grid__image" src={image.node.secure_url}/>
                </div>
              ))
            }
          </div>
        </div>
      )
  }
  export default PhotoTiles
