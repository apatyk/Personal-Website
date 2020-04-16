import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import './index-page.scss'

export const IndexPageTemplate = ({
  html
}) => (
  <div className="home-page">
    <div className="home-page__content" dangerouslySetInnerHTML={{ __html: html }}></div>
  </div>
);

const IndexPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <IndexPageTemplate
      html={html}
    />
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
  query IndexPageTemplate {
    markdownRemark {
      html
    }
  }
`
