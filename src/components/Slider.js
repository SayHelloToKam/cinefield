import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/slider.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


function Slider({apiKey, baseUrl}) {

const [upcomingMovies, setUpcomingMovies]=useState([]);
const [index, setIndex]=useState(0)

    useEffect(() => {
     axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
     .then(res=>{
        setUpcomingMovies(res.data.results)
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
}

const handleLeft=()=>{
    setIndex(index-1)
}


  return (
    <div className='slider-container' style={sliderStyle}>
        <div className='slider-overlay'></div>
        <MdKeyboardArrowLeft className='left-arrow' onClick={handleLeft}/>
        <MdKeyboardArrowRight className='right-arrow'onClick={handleRight}/>
    </div>
  )
}

export default Slider