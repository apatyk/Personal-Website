import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CenteredCard from '../components/CenteredCard'
import PhotoGallery from '../components/PhotoGallery'

import './portfolio-page.scss'

export const LandscapesPortfolioPageTemplate = ({
  clImages,
  html
}) => (
  <div className="portfolio-page">
    <div className="portfolio-page__content">
      <CenteredCard content={html}></CenteredCard>
    </div>
    <div className="portfolio-page__gallery">
      <PhotoGallery clImages={clImages} />
    </div>
  </div>
);

const LandscapesPortfolioPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <LandscapesPortfolioPageTemplate
        html={html}
        clImages={data.allCloudinaryMedia.edges}
      />
    </Layout>
  )
}

LandscapesPortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object
    }),
    allCloudinaryMedia: PropTypes.shape({
      clImages: PropTypes.array
    })
  }),
}

export default LandscapesPortfolioPage

export const pageQuery = graphql`
  query LandscapesPortfolioPage($id: String!, $page: String! = "web-portfolio/landscapes/*") {
    markdownRemark(id: { eq: $id } ) {
      html
    }
    allCloudinaryMedia(filter: {public_id: {glob: $page}}) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`