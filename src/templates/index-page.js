import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AboveFoldContent from '../components/AboveFoldContent'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Card from '../components/Card'
import FullWidthAccentContent from '../components/FullWidthAccentContent'
import Layout from '../components/Layout'
import SocialMediaRow from '../components/SocialMediaRow'

import './index-page.scss'

const IndexPageTemplate = ({
  html,
  buttons,
  contentTitle,
  cards,
  socialMedia
}) => (
  <div className="home-page">
    <AboveFoldContent 
      className="home-page__content"
      content={html ? html : null}>
    </AboveFoldContent>
    <Banner>
      {
        buttons && buttons.map(({
          buttonTitle,
          buttonLink
        }) => (
          <Button 
            title={buttonTitle}
            link={buttonLink}>
          </Button>
        ))
      }
    </Banner>
    <FullWidthAccentContent
    title={contentTitle}>
      {
        cards && cards.map(({
          heading,
          text,
          details,
          image,
          imageAltText
        }) => (
          <Card
          heading={heading}
          text={text}
          details={details}
          image={image}
          imageAltText={imageAltText}>
        </Card>
        ))
      }
      <Card>
        <SocialMediaRow
          className="home-page__content__social-media"
          socialMedia={socialMedia}
        />
      </Card>
    </FullWidthAccentContent>
  </div>
);

IndexPageTemplate.propTypes = {
  buttons: PropTypes.array,
  contentTitle: PropTypes.string,
  cards: PropTypes.array,
  socialMedia: PropTypes.array
}

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        html={html}
        buttons={frontmatter.buttons}
        contentTitle={frontmatter.contentTitle}
        cards={frontmatter.cards}
        socialMedia={frontmatter.socialMedia}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
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
        buttons {
          buttonTitle
          buttonLink
        }
        contentTitle
        cards {
          heading
          text
          details {
            line
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 75
                placeholder: TRACED_SVG
              )
            }
          }
          imageAltText
        }
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
