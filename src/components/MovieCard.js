import React from 'react'

function MovieCard({movie,width,height,radius,cardStyle,imageUrl}) {

    const imageStyle={
        backgroundImage:`url("https://image.tmdb.org/t/p/w500/${imageUrl}")`, 
        width:width,
        height:height,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition:'center', 
        position:'relative',
        borderRadius:radius,
        boxShadow: cardStyle==="popular-card"?"0px 0px 10px 0px rgba(118,118,118,0.75)":null
      }

  return (
    <div className={cardStyle}>
        <div style={imageStyle}>
            
        </div>

    </div>
  )
}

export default MovieCard