import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AboveFoldContent from '../components/AboveFoldContent'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Card from '../components/Card'
import Layout from '../components/Layout'
import SocialMediaRow from '../components/SocialMediaRow'

import './index-page.scss'

const IndexPageTemplate = ({
  html,
  socialMedia
}) => (
  <div className="home-page">
    <AboveFoldContent 
      className="home-page__content"
      content={html ? html : null}>
    </AboveFoldContent>
    <Banner>
      <Button 
        title='Portfolio' 
        link='#'>
      </Button>
      <Button 
        title='Buy Prints' 
        link='#'>
      </Button>
    </Banner>
    <Card>
      <SocialMediaRow
        className="home-page__content__social-media"
        socialMedia={socialMedia}
      />
    </Card>
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

export const query = graphql`
query IndexPage($id: String!) {
  markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        socialMedia {
          icon {
            publicURL
          }
          link
          newTab
        }
      }
    }
  }
`
