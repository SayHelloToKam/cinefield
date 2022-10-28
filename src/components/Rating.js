import React from 'react'
import StarRatings from 'react-star-ratings'

function Ratings({currentRating}) {
  return (
    <div className='rating'>
        <StarRatings
          rating={currentRating}
          starRatedColor={'red'}
          starDimension={'20px'}
          starSpacing={'1px'}
        />
    </div>
    
  )
}

export default Ratings