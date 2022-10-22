import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/slider.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import StarRatings from 'react-star-ratings'


function Slider({apiKey, baseUrl}) {

const [upcomingMovies, setUpcomingMovies]=useState([]);
const [currentRating, setCurrentRating]=useState(0);
const [index, setIndex]=useState(0)

    useEffect(() => {
     axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
     .then(res=>{
        setUpcomingMovies(res.data.results)
        setCurrentRating(Math.round((res.data.results[index].vote_average)/2))
     })
     .catch(err=>console.log(err))
    }, [])

const sliderStyle = {
    height:"60vh",
    width:"100%",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${upcomingMovies[index]?.backdrop_path}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
}

const handleRight=()=>{
    setIndex(index+1)
    if(index===upcomingMovies.length -1) {
        setIndex(0)
    }
}

const handleLeft=()=>{
    setIndex(index-1)
    if(index===0) {
        setIndex(upcomingMovies.length-1)
    }
    
}


  return (
    <div className='slider-container' style={sliderStyle}>
        <div className='slider-overlay'></div>
        <MdKeyboardArrowLeft className='left-arrow' onClick={handleLeft}/>
        <MdKeyboardArrowRight className='right-arrow'onClick={handleRight}/>
        <div className='slider-info'>
            <h1>{upcomingMovies[index]?.title}</h1>
            <p>{upcomingMovies[index]?.overview.slice(0,225)}...</p>
            <p>Release Date: {upcomingMovies[index]?.release_date}</p>
            <StarRatings
                rating={currentRating}
                starRatedColor={'red'}
                starDimension={'20px'}
                starSpacing={'1px'}
            />
            <a className='see-details'>See Details</a>
        </div>
    </div>
  )
}

export default Slider