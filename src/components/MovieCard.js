import React, {useState} from 'react'
import '../styles/movies.css'
import Rating from './Rating';

function MovieCard({movie,width,height,radius,cardStyle,imageUrl}) {
  const [rating,setRating]=useState(Math.round((movie?.vote_average)/2))

    const imageStyle={
        backgroundImage:`url("https://image.tmdb.org/t/p/w500/${imageUrl}")`, 
        width:width,
        height:height,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition:'center', 
        position:'relative',
        borderRadius:radius,
        boxShadow: cardStyle==="popular-card"?"0px 0px 10px 0px rgba(118,118,118,0.75)":null
      }

  return (
    <a href={`/moviedetails/${movie?.id}`} className={cardStyle}>
        <div style={imageStyle}>
            <div className='movie-info-top'>
                <Rating currentRating={rating}/>
            </div>
            <div className='movie-info-bottom'>
                <p>{movie?.title}</p>
                <p>Rating:{rating}</p>
            </div>
        </div>
        {
          cardStyle==='top-rated-card'
          ? <div>
            <p>{movie?.title}</p>
            </div>
          : null
        }

    </a>
  )
}

export default MovieCard