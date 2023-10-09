import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image.js';

const Card = ({
  content,
  heading,
  text,
  details,
  image,
  imageAltText,
  children,
}) => {
  return (
    <div className="card-container w-full p-4 flex justify-center">
      {heading || image ? (
        <div
          className={`card z-10 m-0 p-8 rounded-xl bg-white shadow-xl w-full md:max-w-prose overflow-hidden ${
            heading && image && 'md:flex md:justify-between'
          }`}
        >
          <div className="card-content">
            {!!heading ? (
              <>
                <h2 className="card-heading font-medium leading-loose">
                  {heading}
                </h2>
                <p className="card-text leading-relaxed">{text}</p>
              </>
            ) : null}

            {details && (
              <ul className="list-disc list-inside">
                {details.map(({ item, index }) => (
                  <li key={index} className="card-details leading-loose">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {!!image ? (
            <Image
              className={`card-image ${
                heading && image && 'md:w-1/2 md:-mr-8 md:-my-8'
              }`}
              image={image}
              alt={imageAltText}
            />
          ) : null}
          {!!children ? <>{children}</> : null}
        </div>
      ) : (
        <>
          {content == null ? (
            <>{children}</>
          ) : (
            <div
              className="ard m-0 p-8 rounded-xl bg-white shadow-xl w-full md:max-w-prose"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          )}
          å
        </>
      )}
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.object,
  heading: PropTypes.string,
  text: PropTypes.string,
  details: PropTypes.array,
  image: PropTypes.object,
  imageAltText: PropTypes.string,
  skills: PropTypes.array,
  children: PropTypes.node,
};

export default Card;
