import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'

import Skill from './Skill.js'
import Image from './Image.js'

const Card = ({ 
  content, 
  heading,
  text,
  details,
  image,
  imageAltText,
  skills,
  children
}) => {

  if (heading || image || skills) {
    return (
      <div className="card-container">
        <div className={`card ${heading && image && 'split'}`}>
          <div className="card__content">
            {
              !!heading ? (
                <>
                <h2 className="card__heading">{heading}</h2>
                <p className="card_text">{text}</p>
                </>
              ) : (
                null
              )
            }
            {
              details && details.map(({
                line
              }) => (
                  <p className="card__details">{line}</p>
              ))
            }
            </div>
            {
              skills && skills.map(({
                skillName,
                rating
              }) => (
                <Skill
                  skillName={skillName}
                  rating={rating}
                />
              ))
            }
            {
              !!image ? (
                <Image 
                  className="card__image"
                  image={image}  
                  alt={imageAltText}
                />
              ) : (
                null
              )
           }
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="card-container">
        {
          content == null ? (
              <>
                {children}
              </>
          ) : (
            <div 
              className="card" 
              dangerouslySetInnerHTML={{ __html: content }}>
            </div>
          )
        }
      </div>
    )
  }
}

Card.propTypes = {
  content: PropTypes.object,
  heading: PropTypes.string,
  text: PropTypes.string,
  details: PropTypes.array,
  image: PropTypes.object,
  imageAltText: PropTypes.string,
  skills: PropTypes.array
}

export default Card