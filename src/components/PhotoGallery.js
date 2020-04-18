import React from 'react'
import './PhotoGallery.scss'
import {useStaticQuery, graphql} from 'gatsby'

const ImageGallery = () => {
    const data = useStaticQuery(graphql`query CloudinaryImage {
      allCloudinaryMedia(filter: {public_id: {glob: "web-portfolio/adventures/*"}}) {
        edges {
          node {
            secure_url
          }
        }
      }
    }`
    )
    const clImages = data.allCloudinaryMedia.edges

    return (
        <div>
          <div className="photo-grid">
            {clImages.map((image, index) => (
                <div className="photo-item" key={`${index}-cl`}>
                  <img src={image.node.secure_url} alt={"no alt :("} />
                </div>
              ))
            }
          </div>
        </div>
      )
  }
  export default ImageGallery
