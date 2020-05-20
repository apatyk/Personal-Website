import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Banner from '../components/Banner'
import Card from '../components/Card'
import Galleries from '../components/Galleries'
import Layout from '../components/Layout'
import PhotoGallery from '../components/PhotoGallery'

import './portfolio-page.scss'

export const PeoplePortfolioPageTemplate = ({
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
    <Galleries/>
  </div>
);

const PeoplePortfolioPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <PeoplePortfolioPageTemplate
        html={html}
        clImages={data.allCloudinaryMedia.edges}
      />
    </Layout>
  )
}

PeoplePortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object
    }),
    allCloudinaryMedia: PropTypes.shape({
      clImages: PropTypes.array
    })
  }),
}

export default PeoplePortfolioPage

export const pageQuery = graphql`
  query PeoplePortfolioPage($id: String!, $page: String! = "web-portfolio/people/*") {
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
