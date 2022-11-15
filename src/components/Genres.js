import React from 'react'

function Genres({movieGenres}) {
  return (
    <div className='genre-container'>
        <p>Genres:&nbsp;</p>
        {
            movieGenres.map((item,index)=>{
                return <p>{index === movieGenres.length-1 ? `${item.name}` : `${item.name},`}&nbsp;</p>
            })
        }
    </div>
  )
}

export default Genres