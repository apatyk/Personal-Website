import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Banner from '../components/Banner'
import AboveFoldContent from '../components/AboveFoldContent'
import GalleryLink from '../components/GalleryLink'
import Layout from '../components/Layout'

import './web-design-page.scss'

export const WebDesignPageTemplate = ({
  webGalleries,
  html
}) => (
  <div className="web-design-page">
    <AboveFoldContent 
      className="web-design-page__content"
      content={html}>
    </AboveFoldContent>
    <Banner/>
    <div className="web-design-page__galleries">
      {
        webGalleries && webGalleries.map(({ 
          title, 
          image, 
          link,
          newTab
        }) => (
          <GalleryLink
            title={title}
            image={image}
            link={link}
            newTab={newTab}
          />
        ))
      }
    </div>
  </div>
);

WebDesignPageTemplate.propTypes = {
  webGalleries: PropTypes.array,
}

const WebDesignPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <WebDesignPageTemplate
        webGalleries={frontmatter.webGalleries}
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
        webGalleries {
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
          newTab
        }
      }
    }
  }
`
