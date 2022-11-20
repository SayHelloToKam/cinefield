import React,{useState,useEffect,useContext} from 'react'
import '../styles/favorites.css';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext'
import MovieCard from '../components/MovieCard';

function MyFavorites({serverUrl}) {

const [movies,setMovies]=useState([]);
const {user,setUser,token}=useContext(UserContext)

useEffect(() => {
  axios.get(`${serverUrl}/favoriteMovies/user/${user._id}`)
  .then(res=>{
    setMovies(res.data.favorites)
  })
  .catch(err=>console.log(err))
}, [])


  return (
    <div className='favorites-container'>
      {
        token
        ? movies.map(item=>{
          return <MovieCard radius={'16px'} cardStyle={'popular-card'} width={'200px'} height={'300px'} imageUrl={item.movie[0].poster_path} key={item.movie[0]._id} movie={item.movie[0]}
          />
        })
        : <p>Create An Account or Sign In to View Favorites.</p>
      }
    </div>
  )
}

export default MyFavorites