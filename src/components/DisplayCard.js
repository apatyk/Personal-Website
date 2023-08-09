import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

import './DisplayCard.scss';

export const DisplayCard = ({image, title, link, accentColor, newTab}) => {
  return (
    <div
      className="display-card"
      style={{backgroundColor: '#' + accentColor}}
    >
      <h2 className="display-card__text">{title}</h2>
      <a href={link} target={newTab && '_blank'} className="display-card__link">
        <Image className="display-card__image" image={image} alt={title} />
      </a>
    </div>
  );
};

DisplayCard.defaultProps = {
  newTab: true,
  accentColor: 'FFFFFF',
};

DisplayCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  accentColor: PropTypes.string,
  newTab: PropTypes.bool,
};

export default DisplayCard;
