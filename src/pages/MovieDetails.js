import React, {useEffect,useState} from 'react'
import '../styles/movies.css'
import {useParams} from 'react-router-dom';
import axios from 'axios';


function MovieDetails({baseUrl,apiKey}) {
const {movieid} = useParams();

useEffect(() => {
  axios.get(`${baseUrl}/movie/${movieid}?api_key=${apiKey}&language=en-US`)
  .then(res=> {
    console.log(res.data)
  })
  .catch(err=>console.log(err))
}, [])


  return (
    <div className="movie-details-container">
        {movieid}
    </div>
  )
}

export default MovieDetails