import React from 'react'
import SearchBar from './SearchBar'

import { BACKGROUND_IMG_URL } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'
const SearchGPT = () => {
  return (
    <>
    <div className='fixed -z-10 bg-cover'>
        <img className='h-screen object-cover' src={BACKGROUND_IMG_URL} alt="bg-img" />
        </div>
    <div className=' '>
     
      <SearchBar />
      <GptMovieSuggestion /> 
    
    </div>
    </>
  )
}

export default SearchGPT