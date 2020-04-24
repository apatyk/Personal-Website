import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CenteredCard from '../components/CenteredCard'
import PhotoGallery from '../components/PhotoGallery'
import Banner from '../components/Banner'

import './portfolio-page.scss'

export const AdventuresPortfolioPageTemplate = ({
  clImages,
  html
}) => (
  <div className="portfolio-page">
    <CenteredCard 
      className="portfolio-page__content"
      content={html}>
    </CenteredCard>
    <Banner/>
    <div className="portfolio-page__gallery">
      <PhotoGallery clImages={clImages} />
    </div>
  </div>
);

const AdventuresPortfolioPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <AdventuresPortfolioPageTemplate
        html={html}
        clImages={data.allCloudinaryMedia.edges}
      />
    </Layout>
  )
}

AdventuresPortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object
    }),
    allCloudinaryMedia: PropTypes.shape({
      clImages: PropTypes.array
    })
  }),
}

export default AdventuresPortfolioPage

export const pageQuery = graphql`
  query AdventuresPortfolioPage($id: String!, $page: String! = "web-portfolio/adventures/*") {
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
