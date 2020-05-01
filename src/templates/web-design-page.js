import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CenteredCard from '../components/CenteredCard'
import GalleryLink from '../components/GalleryLink'
import Banner from '../components/Banner'

import './web-design-page.scss'

export const WebDesignPageTemplate = ({
  galleries,
  html
}) => (
  <div className="web-design-page">
    <CenteredCard 
      className="web-design-page__content"
      content={html}>
    </CenteredCard>
    <Banner/>
    <div className="web-design-page__galleries">
      {
        galleries && galleries.map(({ 
          title, 
          image, 
          link 
        }) => (
          <GalleryLink
            title={title}
            image={image}
            link={link}
          />
        ))
      }
    </div>
  </div>
);

WebDesignPageTemplate.propTypes = {
  galleries: PropTypes.array,
}

const WebDesignPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <WebDesignPageTemplate
        galleries={frontmatter.galleries}
        html={html}
      />
    </Layout>
  )
}

WebDesignPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.object,
    }),
  }),
}

export default WebDesignPage

export const pageQuery = graphql`
  query WebDesignPage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        galleries {
          title
          link
          image {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1920, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
