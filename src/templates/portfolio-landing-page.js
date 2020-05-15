import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CenteredCard from '../components/CenteredCard'
import GalleryLink from '../components/GalleryLink'
import Banner from '../components/Banner'

import './portfolio-landing-page.scss'

export const PortfolioLandingPageTemplate = ({
  galleries,
  html
}) => (
  <div className="portfolio-landing-page">
    <CenteredCard 
      className="portfolio-landing-page__content"
      content={html}
      displayScrollIndicator={true}>
    </CenteredCard>
    <Banner/>
    <div className="portfolio-landing-page__galleries">
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

PortfolioLandingPageTemplate.propTypes = {
  galleries: PropTypes.array,
}

const PortfolioLandingPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <PortfolioLandingPageTemplate
        galleries={frontmatter.galleries}
        html={html}
      />
    </Layout>
  )
}

PortfolioLandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.object,
    }),
  }),
}

export default PortfolioLandingPage

export const pageQuery = graphql`
  query PortfolioLandingPage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        galleries {
          title
          link
          image
        }
      }
    }
  }
`
