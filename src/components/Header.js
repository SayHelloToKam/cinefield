import React, {useState,useContext} from 'react'
import '../styles/header.css'
import axios from 'axios';
import SearchResults from './SearchResults'
import {ThemeContext} from '../contexts/ThemeContext'
import {useNavigate,Link} from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

function Header({baseUrl,apiKey}) {
  const [query,setQuery]=useState('')
  const [searchResults,setSearchResults]=useState([])
  const {darkMode,setDarkMode}=useContext(ThemeContext)
  const {user,setUser,token,setToken}=useContext(UserContext)
  const [profileOptions,setProfileOptions]=useState(false)
  const navigate=useNavigate();

  const handleSearch=(e)=>{
      setQuery(e.target.value)
      axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`)
            .then(res=>{
            setSearchResults(res.data.results)
            })
            .catch(err=>console.log(err));
  }

  const handleLogout=()=>{
      localStorage.clear()
      setUser('')
      setToken('')
      navigate('/')
  }

  return (
    <div className={darkMode ? 'header-container':'header-container header-light'}>
        <div className='logo-container'>
          <Link to='/' className='logo'><p>CineTrail</p></Link>
          </div>
          <div className='search-container'>
          <input onChange={handleSearch} className={ 
                    query && darkMode 
                    ? "search-input input-active"
                    : query && !darkMode 
                    ? "search-input input-active input-light"
                    : !query && !darkMode
                    ?  "search-input input-light"
                    : "search-input"} placeholder="Search movies..."/>
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
          <div>
            {
              token
              ? <div className='profile-container'>
                <img onClick={()=>setProfileOptions(!profileOptions)} className='profile-img' src={user.image_url} alt='' />
                <p>Welcome {user.username}</p>
                {
                  profileOptions
                  ? <div className='profile-options'>
                    <Link to='/myfavorites'>My Favorites</Link>
                    <p onClick={handleLogout} className='logout'>Logout</p>
                  </div>
                  : null
                }
              </div>
              : <button className='create-account' onClick={()=>navigate('/signup')}>Create an Account</button>
            } 
          </div>
    </div>
  )
}

export default Header