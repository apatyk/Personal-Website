import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

const PhotoRow = ({ elements }) => {
  return (
    <div className="photo-row flex justify-center flex-wrap pt-2">
      {elements.map(({ image, caption }) => (
        <div className="photo-row-element flex flex-col justify-center align-center w-2/5 m-1 md:flex-nowrap md:w-32 rounded-lg">
          <Image
            className="photo-row-element-image aspect-square rounded-lg"
            image={image}
            alt={caption}
          />
          <span className="photo-row-element-caption text-center my-0.5 font-medium text-xs uppercase">
            {caption}
          </span>
        </div>
      ))}
    </div>
  );
};

PhotoRow.propTypes = { elements: PropTypes.array.isRequired };

export default PhotoRow;
