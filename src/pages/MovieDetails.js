import React, {useEffect,useState} from 'react'
import '../styles/movies.css'
import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'
import Rating from '../components/Rating'
import Review from '../components/Review'
import Genres from '../components/Genres'
import axios from 'axios';



function MovieDetails({baseUrl,apiKey}) {
const {movieid} = useParams();
const [movie,setMovie] = useState({})
const [videoLink,setVideoLink]=useState('')
const [currentRating,setCurrentRating]=useState(0)
const [reviews,setReviews]=useState([])
const [reviewNumber,setReviewNumber]=useState(3)
const [totalReviews,setTotalReviews]=useState('')
const [movieGenres,setMovieGenres]=useState([])


useEffect(() => {
  axios.get(`${baseUrl}/movie/${movieid}?api_key=${apiKey}&language=en-US`)
  .then(res=> {
    // console.log(res.data.genres)
    setMovieGenres(res.data.genres)
    setMovie(res.data)
    setCurrentRating((res.data.vote_average)/2)
  })
  .catch(err=>console.log(err))

  axios.get(`${baseUrl}/movie/${movieid}/videos?api_key=${apiKey}&language=en-US`)
  .then(res=> {
    const youtubeLink = res.data.results.filter(item=>item.site==="YouTube" && item.type==="Trailer")
    setVideoLink(youtubeLink[0].key)
  })
  .catch(err=>console.log(err))

  axios.get(`${baseUrl}/movie/${movieid}/reviews?api_key=${apiKey}&language=en-US`)
  .then(res=> {
    setReviews(res.data.results)
    setTotalReviews(res.data.results.length)
  })
  .catch(err=>console.log(err))
}, [])


  return (
    <div className="movie-details-container">
          <div className='trailer-container'>
              <ReactPlayer className='trailer-player' url={`https://www.youtube.com/watch?v=${videoLink}`}
              width= '100%'
              height= '100%'
              config={{
                youtube: {
                  playersVars: { showinfo: 1,origin: "http://localhost:3000"}
                }
              }}
              />
          </div>
          <div className='details-container'>
              <div className='title-container'>
                  <h1>{movie.title}</h1>
              </div>
              <Rating currentRating={currentRating} />
              <div className='info-container'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="details-poster" alt='movie poster'/>
                <div className='movie-info'>
                  <h2>{movie.tagline}</h2>
                  <h4>{movie.overview}</h4>
                  <h4>Status: <span>{movie.status}</span></h4>
                  <h4>Runtime: <span>{movie.runtime}</span></h4>
                  <h4>Budget: <span>{movie.budget}</span></h4>
                 <Genres component='details' movieGenres={movieGenres} apiKey={apiKey} baseUrl={baseUrl}/>
                </div>
              </div>
              <div className='review-container'>
                  {
                    reviews.slice(0,reviewNumber).map(item=>{
                      return <Review key={item.id} review={item}/>
                    })
                  }

                  {
                      reviewNumber <= totalReviews
                      ? <p className='review-number' onClick={()=>setReviewNumber(reviewNumber+2)}><em>Read more reviews</em></p>
                      : <p className='review-number' onClick={()=>setReviewNumber(3)}><em>End of Review. Read less</em></p>
                  }
              </div>

          </div>
    </div>
  )
}

export default MovieDetails