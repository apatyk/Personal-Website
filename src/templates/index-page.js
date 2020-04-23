import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CenteredCard from '../components/CenteredCard'
import Banner from '../components/Banner'

import './index-page.scss'

export const IndexPageTemplate = ({
  html
}) => (
  <div className="home-page">
    <div className="home-page__content">
      <CenteredCard content={html}></CenteredCard>
    </div>
    <Banner />
  </div>
);

const IndexPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        html={html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPage($id: String!) {
  markdownRemark(id: { eq: $id } ) {
      html
    }
  }
`
