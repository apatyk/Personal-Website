import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AboveFoldContent from '../components/AboveFoldContent'
import Button from '../components/Button'
import Layout from '../components/Layout'

import './photography-page.scss'

const PhotographyPageTemplate = ({
  html
}) => (
  <div className="photography-page">
    <AboveFoldContent 
      className="photography-page__content"
      content={html}>
      <Button 
        title='Portfolio' 
        link='#'>
      </Button>
    </AboveFoldContent>
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

export const query = graphql`
  query PhotographyPage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
    }
  }
`
