import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CenteredCard from '../components/CenteredCard'

import './portfolio-page.scss'

export const PortfolioPageTemplate = ({
  html
}) => (
  <div className="portfolio-page">
    <CenteredCard content={html}></CenteredCard>
  </div>
);

const PortfolioPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <PortfolioPageTemplate
        html={html}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
    }),
  }),
}

export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
    }
  }
`
