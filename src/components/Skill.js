import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Skill.scss'

class Skill extends Component {
  render() {
    let ratingUI = []

    for (let i = 0; i < this.props.rating; i++)
      ratingUI.push(<div className="skill__rating__element fill"></div>)

    for (let j = this.props.rating; j < 5; j++)
      ratingUI.push(<div className="skill__rating__element no-fill"></div>)

    return (
      <div className="skill">
        <h3 className="skill__name">{this.props.skillName}</h3>
        <div className="skill__rating">{ratingUI}</div>
      </div>
    )
  }
}

Skill.propTypes = {
  skillName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default Skill
