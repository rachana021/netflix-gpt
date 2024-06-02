
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux';
import {addTrailerVideo} from '../utils/MovieSlice'
import React, { useEffect, useState } from 'react'

const useMovieTrailer=(movieId)=>{
    
 const dispatch = useDispatch();

// one method to fetch ID is using state variable, other is fetching from redux store
// const [trailerId, setTrailerId]=useState(null);


const getMovieVideos = async ()=>{
  const data= await fetch("https://api.themoviedb.org/3/movie/"
  +movieId+
  "/videos?language=en-US", API_OPTIONS);
  const json= await data.json();
  // await because "data" here is a promise!!
 // console.log(json);
  const filterData= json.results.filter((video)=>video.type==='trailer');
  //thi will give the list of trailers
  
  const trailer= filterData.length ? filterData[0] : json.results[0];
  // if filterData contains something, output its first trailer, else...
  // console.log(trailer);

   //setting trailer using useState
  // setTrailerId(trailer.key);

  //using trailer from redux store, dispatching an action!!!
  dispatch(addTrailerVideo(trailer));
}

useEffect(()=>{
  getMovieVideos();
},[]);


}
export default useMovieTrailer;