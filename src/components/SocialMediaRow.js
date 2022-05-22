import React from 'react'
import PropTypes from 'prop-types'

import './SocialMediaRow.scss'

export const SocialMediaRow = ({ socialMedia, className }) =>
  socialMedia && (
    <div className={`social-media-row ${className}`}>
      {socialMedia.map(({ icon, link, newTab }) => (
        <a
          key={link}
          href={link}
          target={newTab && '_blank'}
          className="social-media-row__link"
        >
          <img
            className="social-media-row__icon"
            src={icon.publicURL}
            alt="Social Media Icon"
          />
        </a>
      ))}
    </div>
  )

SocialMediaRow.propTypes = {
  socialMedia: PropTypes.array.isRequired,
}

export default SocialMediaRow
