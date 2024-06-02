import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-40 px-12 text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl text-left font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div  className='text-left'>
            <button className='bg-white text-black rounded-lg  text-sm mx-2 p-3 px-9 text-white  hover:bg-opacity-80'>
            <i class="fas fa-play"></i>  Play
            </button>
            <button className='w-15 bg-gray-700 rounded-lg text-sm text-white p-3'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle