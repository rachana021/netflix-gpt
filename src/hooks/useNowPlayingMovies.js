import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/MovieSlice'
import React, { useEffect } from 'react'



const useNowPlayingMovies=()=>{
    // fetch data from TMDB API and update store
  const dispatch=useDispatch();

  const getNowPlayingMovies = async()=>{
    const data= await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS
    );
  const json= await data.json();
  console.log(json.results);
  //this will add movies to the store
  dispatch(addNowPlayingMovies(json.results));
  };


  //to call the API only once
  useEffect(()=>{
    getNowPlayingMovies();
  }, [])
}

export default useNowPlayingMovies;