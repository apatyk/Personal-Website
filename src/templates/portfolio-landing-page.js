import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CenteredCard from '../components/CenteredCard'

import './portfolio-landing-page.scss'

export const PortfolioLandingPageTemplate = ({
  html
}) => (
  <div className="portfolio-landing-page">
    <CenteredCard content={html}></CenteredCard>
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
