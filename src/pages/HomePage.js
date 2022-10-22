import axios from 'axios'
import React, {useState,useEffect} from 'react'
import MovieCard from '../components/MovieCard'
import Slider from '../components/Slider'

import '../styles/home.css'

function HomePage({apiKey, baseUrl}) {
const [popularMovies, setPopularMovies]=useState([])
const [topRatedMovies, setTopRatedMovies]=useState([])

useEffect(() => {
  axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
  .then(res=>{
    setPopularMovies(res.data.results)
  })
  .catch(err=>console.log(err))

  axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
  .then(res=>{
    setTopRatedMovies(res.data.results.slice(0,10))
  })
  .catch(err=>console.log(err))

}, [])




  return (
    <div className='homepage-container'>
      <Slider apiKey={apiKey} baseUrl={baseUrl} />
      <div className='movies-wrapper'>
        <div className='popular-container'>
          <h3 className='popular-title'>Popular Movies</h3>
          <div className='popular-cards-wrapper'>
            {
              popularMovies.map(movie=>{
                return <MovieCard movie={movie} height={'300px'} width={'200px'}
                imageUrl={movie.poster_path} cardStyle={'popular-card'} radius={'16px'}/>
              })
            }

          </div>

        </div>
        <div className='top-rated-container'>
          <h3>Top Rated Movies</h3>
          <div className='top-rated-cards-wrapper'>
            {
              topRatedMovies.map(movie=>{
                return <MovieCard movie={movie} height={'100px'} width={'200px'}
                  imageUrl={movie.backdrop_path} cardStyle={'top-rated-card'} radius={'8px'}/>
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage