import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AboveFoldContent from '../components/AboveFoldContent'
import Card from '../components/Card'
import Layout from '../components/Layout'

import './code-page.scss'

const CodePageTemplate = ({
  html,
  heading,
  skills
}) => (
  <div className="code-page">
    <AboveFoldContent 
      className="code-page__content"
      content={html}>
    </AboveFoldContent>
    <Card
      heading={heading}
      skills={skills}>
    </Card>
  </div>
);

const CodePage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CodePageTemplate
        html={html}
        heading={frontmatter.heading}
        skills={frontmatter.skills}
      />
    </Layout>
  )
}

CodePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.object
    }),
  }),
}

export default CodePage

export const query = graphql`
  query CodePage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        heading
        skills {
          skillName
          rating
        }
      }
    }
  }
`
