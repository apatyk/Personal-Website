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
  clImages,
  html,
  portfolioLink,
  details,
  img
}) => (
  <div className="photography-page">
    <AboveFoldContent 
      className="photography-page__content"
      content={html}>
      <Button 
        title='Portfolio' 
        link={portfolioLink}
        invert={true}>
      </Button>
    </AboveFoldContent>
    <PhotoTiles clImages={clImages}></PhotoTiles>
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
        clImages={data.allCloudinaryMedia.edges}
        details={frontmatter.details}
        portfolioLink={frontmatter.portfolioLink}
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
    allCloudinaryMedia: PropTypes.shape({
      clImages: PropTypes.array
    })
  }),
}

export default PhotographyPage

export const query = graphql`
  query PhotographyPage($id: String!, $page: String! = "web-portfolio/*") {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        portfolioLink
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
    allCloudinaryMedia(sort: {order: ASC, fields: secure_url}, filter: {public_id: {glob: $page}}) {
      edges {
        node {
          secure_url
          resource_type
        }
      }
    }
  }
`
