import React from 'react';
import PropTypes from 'prop-types';
import { graphql, withPrefix } from 'gatsby';

import useSiteMetadata from '../components/SiteMetadata';
import AboveFoldContent from '../components/AboveFoldContent';
import DisplayCard from '../components/DisplayCard';
import Layout from '../components/Layout';

export function Head() {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix('/')}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-16x16.png`}
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
        color="#205F48"
      />
      <meta name="theme-color" content="#205F48" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix('/')}img/og-image.jpg`}
      />
    </>
  );
}

const WebDesignPageTemplate = ({ websites, html }) => (
  <div className="web-design-page">
    <AboveFoldContent
      className="web-design-page-content"
      content={html}
    ></AboveFoldContent>
    <div className="web-design-page-gallery">
      {websites &&
        websites.map(({ title, image, link, accentColor, newTab }) => (
          <DisplayCard
            key={title}
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

const WebDesignPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

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
