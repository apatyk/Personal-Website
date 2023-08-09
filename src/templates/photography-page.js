import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AboveFoldContent from '../components/AboveFoldContent'
import Button from '../components/Button'
import Card from '../components/Card'
import Layout from '../components/Layout'
import PhotoRow from '../components/PhotoRow'
import PhotoBackground from '../components/PhotoBackground'

import './photography-page.scss'

const PhotographyPageTemplate = ({
  clImages,
  html,
  portfolioLink,
  details,
  cardPhoto,
  inspiration,
}) => (
  <div className="photography-page">
    <AboveFoldContent className="photography-page__content" content={html}>
      <Button title="Portfolio" link={portfolioLink} invert={true}></Button>
    </AboveFoldContent>
    <PhotoBackground clImages={clImages}></PhotoBackground>
    <Card heading="Gear" details={details} image={cardPhoto}></Card>
    <Card
      heading="Inspiration"
      text="I draw inspiration from the amazing world around us and some other incredible photographers."
    >
      <PhotoRow elements={inspiration}></PhotoRow>
    </Card>
  </div>
)

const PhotographyPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PhotographyPageTemplate
        html={html}
        clImages={data.allCloudinaryMedia.edges}
        details={frontmatter.details}
        portfolioLink={frontmatter.portfolioLink}
        cardPhoto={frontmatter.cardPhoto}
        inspiration={frontmatter.inspiration}
      />
    </Layout>
  )
}

PhotographyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
    allCloudinaryMedia: PropTypes.shape({
      clImages: PropTypes.array,
    }),
  }),
}

export default PhotographyPage

export const query = graphql`
  query PhotographyPage($id: String!, $page: String! = "web-portfolio/*") {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        portfolioLink
        details {
          line
        }
        cardPhoto {
          childImageSharp {
            gatsbyImageData(width: 640, quality: 50, placeholder: DOMINANT_COLOR)
          }
        }
        inspiration {
          image {
            childImageSharp {
              gatsbyImageData(width: 500, quality: 50, placeholder: DOMINANT_COLOR)
            }
          }
          caption
        }
      }
    }
    allCloudinaryMedia(
      sort: { order: ASC, fields: secure_url }
      filter: { public_id: { glob: $page } }
    ) {
      edges {
        node {
          secure_url
          resource_type
        }
      }
    }
  }
`
