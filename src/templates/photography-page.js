import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AboveFoldContent from '../components/AboveFoldContent'
import Button from '../components/Button'
import Card from '../components/Card'
import Layout from '../components/Layout'
import PhotoTiles from '../components/PhotoTiles'

import './photography-page.scss'

const PhotographyPageTemplate = ({
  html,
  details,
  img
}) => (
  <div className="photography-page">
    <AboveFoldContent 
      className="photography-page__content"
      content={html}>
      <PhotoTiles></PhotoTiles>
      <Button 
        title='Portfolio' 
        link='#'
        invert={true}>
      </Button>
    </AboveFoldContent>
    <Card
      heading="Gear"
      details={details}
      image={img}>
    </Card>
    <Card
      heading="Inspiration"
      text="I draw inspiration from the amazing world around us and some other incredible photographers.">
    </Card>
  </div>
);

const PhotographyPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PhotographyPageTemplate
        html={html}
        details={frontmatter.details}
        img={frontmatter.img}
      />
    </Layout>
  )
}

PhotographyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object
    }),
  }),
}

export default PhotographyPage

export const query = graphql`
  query PhotographyPage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        details {
          line
        }
        img {
          childImageSharp {
            gatsbyImageData(
              width: 640
              quality: 50
              placeholder: TRACED_SVG
            )
          }
        }
      }
    }
  }
`
