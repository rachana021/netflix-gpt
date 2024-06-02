import { createSlice } from "@reduxjs/toolkit";

const MovieSlice= createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies, addTrailerVideo}= MovieSlice.actions;
export default MovieSlice.reducer;