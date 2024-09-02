import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

export const DisplayCard = ({ image, title, link, accentColor, newTab }) => {
  return (
    <div
      className="display-card my-4 md:m-8 relative flex flex-col-reverse md:flex-row md:even:flex-row-reverse overflow-hidden shadow-xl sm:rounded-xl before:block before:bg-black/30"
      style={{ backgroundColor: '#' + accentColor }}
    >
      <h2 className="display-card-text w-full h-min px-8 py-4 self-center text-center text-white text-xl md:w-1/2 z-10 font-medium">
        {title}
      </h2>
      {link ? (
        <a
          href={link}
          target={newTab && '_blank'}
          className="display-card-link"
        >
          <Image
            className="display-card-image z-10 after:block after:transition-all after:z-20"
            image={image}
            alt={title}
          />
        </a>
      ) : (
        <Image
          className="display-card-image z-10 after:block after:transition-all after:z-20"
          image={image}
          alt={title}
        />
      )}
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
