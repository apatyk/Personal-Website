import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Banner from '../components/Banner'
import Card from '../components/Card'
import Galleries from '../components/Galleries'
import Layout from '../components/Layout'
import PhotoGallery from '../components/PhotoGallery'

import './portfolio-page.scss'

export const DronePortfolioPageTemplate = ({
  clImages,
  html
}) => (
  <div className="portfolio-page">
    <Card 
      className="portfolio-page__content"
      content={html}
      background={true}>
    </Card>
    <div className="portfolio-page__gallery">
      <PhotoGallery clImages={clImages} />
    </div>
    <Banner/>
    <Galleries colorBackground={true}/>
  </div>
);

const DronePortfolioPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <DronePortfolioPageTemplate
        html={html}
        clImages={data.allCloudinaryMedia.edges}
      />
    </Layout>
  )
}

DronePortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object
    }),
    allCloudinaryMedia: PropTypes.shape({
      clImages: PropTypes.array
    })
  }),
}

export default DronePortfolioPage

export const pageQuery = graphql`
  query DronePortfolioPage($id: String!, $page: String! = "web-portfolio/drone/*") {
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
