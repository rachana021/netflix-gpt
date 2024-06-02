import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';


const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
  //fetching popular movies and update the store

  return (
       <div>
       <Header/>
       <MainContainer/>
       {/* <SecondaryContainer/> */}
       </div>    
  )
}

export default Browse