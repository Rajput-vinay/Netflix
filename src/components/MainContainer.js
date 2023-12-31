import React from 'react'
import {useSelector} from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitile from './VideoTitile'

const MainContainer = () => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)

  if(movies===null) return;
  const mainMovie = movies[0];
 

  const {original_title,overview,id} = mainMovie;
    return (
        <div className='md:pt-0 pt-[30%] bg-black'>
    
    <VideoTitile title ={original_title} overview ={overview} />
    <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer