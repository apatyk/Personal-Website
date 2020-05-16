import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CenteredCard from '../components/CenteredCard'
import Card from '../components/Card'
import Banner from '../components/Banner'
import SocialMediaRow from '../components/SocialMediaRow'

import './index-page.scss'

export const IndexPageTemplate = ({
  html,
  socialMedia,
  resume
}) => (
  <div className="home-page">
    <CenteredCard 
      className="home-page__content"
      content={html ? html : null}
      displayScrollIndicator={true}>
        <SocialMediaRow
          className="home-page__content__social-media"
          socialMedia={socialMedia}
        />
    </CenteredCard>
    <Banner />
    {
      resume && resume.map(({
        heading,
        more,
        skills
      }) => (
        <Card
          heading={heading}
          more={more}
          skills={skills}
          background={false}
        />
      ))
    }
    <Card>
      <SocialMediaRow
        className="home-page__content__social-media"
        socialMedia={socialMedia}
      />
    </Card>
  </div>
);

IndexPageTemplate.propTypes = {
  socialMedia: PropTypes.array,
  resume: PropTypes.array
}

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        html={html}
        socialMedia={frontmatter.socialMedia}
        resume={frontmatter.resume}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object
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
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
          newTab
        }
        resume {
          heading
          more {
            subheading
            description
            details
          }
          skills {
            skillName
            rating
          }
        }
      }
    }
  }
`
