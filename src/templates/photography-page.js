import React from 'react';
import PropTypes from 'prop-types';
import { graphql, withPrefix } from 'gatsby';

import useSiteMetadata from '../components/SiteMetadata';
import AboveFoldContent from '../components/AboveFoldContent';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/Layout';
import PhotoRow from '../components/PhotoRow';
import PhotoBackground from '../components/PhotoBackground';

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

const PhotographyPageTemplate = ({ clImages, html, portfolioLink, cards }) => (
  <div className="photography-page">
    <div className="photography-page-container">
      <AboveFoldContent className="photography-page-content" content={html}>
        <Button title="Portfolio" link={portfolioLink}></Button>
      </AboveFoldContent>
      <PhotoBackground clImages={clImages}></PhotoBackground>
    </div>
    {cards &&
      cards.map(
        ({ cardHeading, cardText, cardPhoto, cardDetails, photoRow }) => (
          <Card
            heading={cardHeading}
            text={cardText}
            details={cardDetails}
            image={cardPhoto}
          >
            {photoRow ? <PhotoRow elements={photoRow}></PhotoRow> : ''}
          </Card>
        )
      )}
  </div>
);

PhotographyPageTemplate.propTypes = {
  clImages: PropTypes.array,
  html: PropTypes.object,
  portfolioLink: PropTypes.string,
  cards: PropTypes.array,
};

const PhotographyPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PhotographyPageTemplate
        html={html}
        clImages={data.allCloudinaryMedia.edges}
        portfolioLink={frontmatter.portfolioLink}
        cards={frontmatter.cards}
      />
    </Layout>
  );
};

PhotographyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
    allCloudinaryMedia: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default PhotographyPage;

export const query = graphql`
  query PhotographyPage($id: String!, $page: String! = "web-portfolio/*") {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        portfolioLink
        cards {
          cardHeading
          cardText
          cardDetails {
            item
          }
          cardPhoto {
            childImageSharp {
              gatsbyImageData(
                width: 640
                quality: 50
                placeholder: DOMINANT_COLOR
              )
            }
          }
          photoRow {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  quality: 50
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            caption
          }
        }
      }
    }
    allCloudinaryMedia(
      sort: { secure_url: ASC }
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
`;
