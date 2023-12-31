import React from 'react'
import SearchBar from './SearchBar'

import { BACKGROUND_IMG_URL } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'
const SearchGPT = () => {
  return (
   <div className='pt-[20%] '>
     <div className='fixed -z-10 '>
        <img src={BACKGROUND_IMG_URL} alt="bg-img" />
        </div>
      <SearchBar />
      <GptMovieSuggestion /> 
    
    </div>
  )
}

export default SearchGPT
