import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'

import CardSubsection from './CardSubsection.js'
import Skill from './Skill.js'

const Card = ({ 
  content, 

  heading,
  more,
  skills,
  children
}) => {

  if (heading || more || skills) {
    return (
      <div className="card-container">
        <div 
          className="card">
            <h2 className="card__heading">{heading}</h2>
            {
              more && more.map(({
                subheading,
                description,
                details,
                image
              }) => (
                <CardSubsection
                  subheading={subheading}
                  description={description}
                  details={details}
                  image={image}
                />
              ))
            }
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
  more: PropTypes.array,
  skills: PropTypes.array
}

export default Card