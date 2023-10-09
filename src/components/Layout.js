import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className="whole-page">
      <Navbar />
      <div className="page-content mt-14">{children}</div>
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = { children: PropTypes.node };

export default TemplateWrapper;
