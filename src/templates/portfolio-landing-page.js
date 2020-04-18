import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import './portfolio-landing-page.scss'

export const PortfolioLandingPageTemplate = ({
  html
}) => (
  <div className="portfolio-landing-page">
    <div className="portfolio-landing-page__content" dangerouslySetInnerHTML={{ __html: html }}></div>
  </div>
);

const PortfolioLandingPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <PortfolioLandingPageTemplate
        html={html}
      />
    </Layout>
  )
}

PortfolioLandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
    }),
  }),
}

export default PortfolioLandingPage

export const pageQuery = graphql`
  query PortfolioLandingPage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
    }
  }
`
