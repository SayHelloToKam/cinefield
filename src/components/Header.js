import React, {useState,useContext} from 'react'
import '../styles/header.css'
import axios from 'axios';
import SearchResults from './SearchResults'
import {ThemeContext} from '../contexts/ThemeContext'
import {Link} from 'react-router-dom'

function Header({baseUrl,apiKey}) {
  const [query,setQuery]=useState('')
  const [searchResults,setSearchResults]=useState([])
  const {darkMode,setDarkMode}=useContext(ThemeContext)

  const handleSearch=(e)=>{
      console.log(e.target.value)
      axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`)
            .then(res=>{
            setSearchResults(res.data.results)
            })
            .catch(err=>console.log(err));
  }

  return (
    <div className={darkMode ? 'header-container':'header-container header-light'}>
        <div className='logo-container'>
          <Link to='/' className='logo'><p>CineTrail</p></Link>
          </div>
          <div className='search-container'>
            <input onChange={handleSearch} className={query ?'search-input input-active':'search-imput' } placeholder='Search movies'/>
            {
              query !==''
              ? <div className='search-results-container'>
                
                {
                  searchResults.map(movie=>{
                    return <SearchResults setQuery={setQuery} movie={movie} />
                  })
                }

              </div>
              : null
            }
          </div>
    </div>
  )
}

export default Header