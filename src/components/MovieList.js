import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies);
  return (
    <div  className='px-6 '>
        <h1 className='py-4 text-white text-left text-3xl font-bold'>{title}</h1>
        <div className='flex overflow-x-scroll '>
        <div className='flex pt-5'>
        {movies?.map((movie)=>  <MovieCard  key={movie.id} posterPath={movie.poster_path}/>)}
        </div>
        </div>
    </div>
  )
}

export default MovieList