import React, {useState} from 'react'
import '../styles/reviews.css'
import avatar from '../assets/avatar.jpeg'

function Review({review}) {
    
    const [seeMore,setSeeMore]=useState(false)
    const [defaultImage,setDefaultImage]=useState(avatar);
    const [imageError,setImageError]=useState(false)
  return (
    <div className='review'>
        <div className='avatar-container'>
            <img className='avatar' src={imageError ? avatar : `https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`} alt=''
            onError={()=>{setImageError(true)}}
            />
            <p>{review.author}</p>
        </div>
        {
            seeMore
            ? <p className='content'>{review.content}<span className='read-less' onClick={()=>setSeeMore(false)}>read less</span></p>
            : <p className='content'>{review.content.slice(0,250)}<span className='read-more' onClick={()=>setSeeMore(true)}>read more</span></p>
        }
        

    </div>
  )
}

export default Review