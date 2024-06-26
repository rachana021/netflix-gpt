import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import SecondaryContainer from './SecondaryContainer';

const MainContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    //geting the data from redux store using useselector
     if(movies===null) return;
    //  if(!movies) return;
     // early return 

     const mainMovie= movies[0];
     console.log(mainMovie);
     const {original_title,overview, id}= mainMovie;

    return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} />
          <SecondaryContainer />
          </div>
  )
}

export default MainContainer