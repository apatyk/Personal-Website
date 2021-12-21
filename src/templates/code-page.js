import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Banner from '../components/Banner'
import AboveFoldContent from '../components/AboveFoldContent'
import Layout from '../components/Layout'

import './code-page.scss'

export const CodePageTemplate = ({
  html
}) => (
  <div className="code-page">
    <AboveFoldContent 
      className="code-page__content"
      content={html}>
    </AboveFoldContent>
    <Banner/>
  </div>
);

const CodePage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <CodePageTemplate
        html={html}
      />
    </Layout>
  )
}

CodePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object
    }),
  }),
}

export default CodePage

export const pageQuery = graphql`
  query CodePage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
    }
  }
`
