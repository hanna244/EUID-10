import React from 'react'

const RatingStars = (props) => {
  return (
    <span
      className={['rating-stars', props.rating.score]}
      ariaLabel={props.rating.label}
    ></span>
  )
}

export default RatingStars
