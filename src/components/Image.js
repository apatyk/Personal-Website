import React from 'react';
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// NEEDED TO SUPPORT BOTH RASTER (GATSBY-IMAGE) AND VECTOR (SVG) IMAGES

const Image = ({ image, alt, ...props }) => {
  if (!image.childImageSharp && image.extension === 'svg') {
      return <img src={image.publicURL} alt={alt} {...props}/>
  }
  else {
    return <GatsbyImage alt={alt} image={getImage(image.childImageSharp)} {...props}/>
  }
};

Image.propsType = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image;