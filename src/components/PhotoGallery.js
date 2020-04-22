import React from 'react'
import './PhotoGallery.scss'

const PhotoGallery = ( {
  clImages
}) => {
    return (
        <div>
          <div className="photo-grid">
            {clImages && clImages.map((image, index) => (
                <div className="photo-item" key={`${index}-cl`}>
                  <img src={image.node.secure_url} alt={"no alt :("} />
                </div>
              ))
            }
          </div>
        </div>
      )
  }
  export default PhotoGallery
