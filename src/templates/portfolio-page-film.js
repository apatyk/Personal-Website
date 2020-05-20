import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Card from '../components/Card'
import PhotoGallery from '../components/PhotoGallery'
import Banner from '../components/Banner'
import Galleries from '../components/Galleries'

import './portfolio-page.scss'

export const FilmPortfolioPageTemplate = ({
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

const FilmPortfolioPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <FilmPortfolioPageTemplate
        html={html}
        clImages={data.allCloudinaryMedia.edges}
      />
    </Layout>
  )
}

FilmPortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object
    }),
    allCloudinaryMedia: PropTypes.shape({
      clImages: PropTypes.array
    })
  }),
}

export default FilmPortfolioPage

export const pageQuery = graphql`
  query FilmPortfolioPage($id: String!, $page: String! = "web-portfolio/film/*") {
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
