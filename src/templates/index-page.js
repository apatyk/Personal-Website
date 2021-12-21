import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Banner from '../components/Banner'
import Card from '../components/Card'
import AboveFoldContent from '../components/AboveFoldContent'
import Layout from '../components/Layout'
import SocialMediaRow from '../components/SocialMediaRow'

import './index-page.scss'

export const IndexPageTemplate = ({
  html,
  socialMedia
}) => (
  <div className="home-page">
    <AboveFoldContent 
      className="home-page__content"
      content={html ? html : null}>
    </AboveFoldContent>
    <Card>
      <SocialMediaRow
        className="home-page__content__social-media"
        socialMedia={socialMedia}
      />
    </Card>
    <Banner />
  </div>
);

IndexPageTemplate.propTypes = {
  socialMedia: PropTypes.array
}

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        html={html}
        socialMedia={frontmatter.socialMedia}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPage($id: String!) {
  markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        socialMedia {
          icon {
            publicURL
            childImageSharp {
              fluid(maxWidth: 320, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          link
          newTab
        }
      }
    }
  }
`
