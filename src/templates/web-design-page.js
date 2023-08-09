import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import AboveFoldContent from '../components/AboveFoldContent';
import DisplayCard from '../components/DisplayCard';
import Layout from '../components/Layout';

import './web-design-page.scss';

const WebDesignPageTemplate = ({websites, html}) => (
  <div className="web-design-page">
    <AboveFoldContent
      className="web-design-page__content"
      content={html}
    ></AboveFoldContent>
    <div className="web-design-page__gallery">
      {websites &&
        websites.map(({title, image, link, accentColor, newTab}) => (
          <DisplayCard
            title={title}
            image={image}
            link={link}
            accentColor={accentColor}
            newTab={newTab}
          />
        ))}
    </div>
  </div>
);

WebDesignPageTemplate.propTypes = {
  websites: PropTypes.array,
  html: PropTypes.object,
};

const WebDesignPage = ({data}) => {
  const {frontmatter, html} = data.markdownRemark;

  return (
    <Layout>
      <WebDesignPageTemplate websites={frontmatter.websites} html={html} />
    </Layout>
  );
};

WebDesignPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.object,
    }),
  }),
};

export default WebDesignPage;

export const query = graphql`
  query WebDesignPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        websites {
          title
          link
          image {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                quality: 75
                placeholder: DOMINANT_COLOR
                layout: CONSTRAINED
              )
            }
          }
          accentColor
          newTab
        }
      }
    }
  }
`;
