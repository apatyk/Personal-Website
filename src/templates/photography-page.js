import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Banner from '../components/Banner'
import AboveFoldContent from '../components/AboveFoldContent'
import Layout from '../components/Layout'

import './photography-page.scss'

export const PhotographyPageTemplate = ({
  html
}) => (
  <div className="photography-page">
    <AboveFoldContent 
      className="photography-page__content"
      content={html}>
    </AboveFoldContent>
    <Banner/>
  </div>
);

const PhotographyPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <PhotographyPageTemplate
        html={html}
      />
    </Layout>
  )
}

PhotographyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object
    }),
  }),
}

export default PhotographyPage

export const pageQuery = graphql`
  query PhotographyPage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
    }
  }
`
