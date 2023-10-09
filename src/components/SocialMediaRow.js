import React from 'react';
import PropTypes from 'prop-types';

export const SocialMediaRow = ({ socialMedia, className }) =>
  socialMedia && (
    <div
      className={`social-media-row flex justify-evenly w-full max-w-xl bg-white py-4 rounded-lg ${className}`}
    >
      {socialMedia.map(({ icon, link, newTab }) => (
        <a
          key={link}
          href={link}
          target={newTab && '_blank'}
          className="social-media-row-link transition-transform hover:scale-110 active:scale-100 "
        >
          <img
            className="social-media-row-icon w-8 h-8"
            src={icon?.publicURL}
            alt="Social Media Icon"
          />
        </a>
      ))}
    </div>
  );

SocialMediaRow.propTypes = {
  socialMedia: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default SocialMediaRow;
