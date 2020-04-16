import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import './index-page.scss'

export const IndexPageTemplate = ({
  heading,
  html
}) => (
  <div className="home-page">
    <h1>{heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  </div>
);

IndexPageTemplate.propTypes = {
  test: PropTypes.string.isRequired,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <IndexPageTemplate
      heading={frontmatter.heading}
      html={html}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        heading
      }
    }
  }
`
