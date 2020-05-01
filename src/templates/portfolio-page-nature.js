import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Card from '../components/Card'
import PhotoGallery from '../components/PhotoGallery'
import Banner from '../components/Banner'

import './portfolio-page.scss'

export const NaturePortfolioPageTemplate = ({
  clImages,
  html
}) => (
  <div className="portfolio-page">
    <Card 
      className="portfolio-page__content"
      content={html}>
    </Card>
    <div className="portfolio-page__gallery">
      <PhotoGallery clImages={clImages} />
    </div>
  </div>
);

const NaturePortfolioPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <NaturePortfolioPageTemplate
        html={html}
        clImages={data.allCloudinaryMedia.edges}
      />
    </Layout>
  )
}

NaturePortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object
    }),
    allCloudinaryMedia: PropTypes.shape({
      clImages: PropTypes.array
    })
  }),
}

export default NaturePortfolioPage

export const pageQuery = graphql`
  query NaturePortfolioPage($id: String!, $page: String! = "web-portfolio/nature/*") {
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
