import React, {useState,useEffect} from 'react'
import axios from 'axios'

function Genres({movieGenres,baseUrl,apiKey,component}) {
    const [allGenres,setAllGenres]=useState([])

useEffect(() => {
  axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`)
  .then(res=>{
    setAllGenres(res.data.genres)
  })
  .catch(err=>console.log(err))
}, [])



  return (
    <div className='genre-container'>
        <p>Genres:&nbsp;</p>
        {
          component === 'details'
          ? movieGenres?.map((item,index)=>{
            return <p key={item.id}>{index === movieGenres.length-1 ? `${item.name}` : `${item.name},`}&nbsp;</p>
          })
          : movieGenres?.map((id,index)=>{
            for(let i=0;i<allGenres.length;i++)
              if(allGenres[i].id===id){
                return <p key={id}>{index===movieGenres.length-1 ? `${allGenres[i].name}` :`${allGenres[i].name},` }&nbsp;</p>
              }
          })
        } 
    </div>
  )
}

export default Genres