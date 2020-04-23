import React from 'react'
import ModalImage from "react-modal-image";

import './PhotoGallery.scss'

const PhotoGallery = ( {
  clImages
}) => {

    if (!clImages) return <></>

    return (
        <div>
          <div className="photo-grid">
            {clImages && clImages.map((image, index) => (
                <div className="photo-grid__item" key={`${index}-cl`}>
                  <ModalImage className="photo-grid__image" small={image.node.secure_url} large={image.node.secure_url} hideDownload={true} hideZoom={true} />
                </div>
              ))
            }
          </div>
        </div>
      )
  }
  export default PhotoGallery
