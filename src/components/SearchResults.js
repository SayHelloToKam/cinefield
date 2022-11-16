import React,{ useState } from 'react'
import '../styles/header.css'
import noImage from '../assets/no-image.svg.png'

function SearchResults({setQuery,movie}) {
    
    const [imageError,setImageError]=useState(false)
  return (
        
        <a className='search-results-item' onClick={()=>setQuery('')} href={`/moviedetails/${movie.id}`}>
        <img className='result-img' src={imageError ? noImage : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        onError={()=> setImageError(true)} alt=''/>
        <p>{movie.title}</p>
    </a>
  )
}

export default SearchResults