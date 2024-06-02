import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/MovieSlice'
import React, { useEffect } from 'react'



const usePopularMovies=()=>{
    // fetch data from TMDB API and update store
  const dispatch=useDispatch();

  const getPopularMovies = async()=>{
    const data= await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS
    );
  const json= await data.json();
  console.log(json.results);
  //this will add movies to the store
  dispatch(addPopularMovies(json.results));
  };


  //to call the API only once
  useEffect(()=>{
    getPopularMovies();
  }, [])
}

export default usePopularMovies;