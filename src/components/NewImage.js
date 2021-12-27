import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { extension: { eq: "jpg" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 640, quality: 80) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      
      const fluid = image.node.childImageSharp.fluid;
      return (
        <Img
          alt={props.alt}
          fluid={fluid}
        />
      );
    }}
  />
)

export default Image;