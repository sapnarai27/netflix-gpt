import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='relative w-1/4 p-10 text-white z-1 bg-gradient-to-r from-black'>
        <div className='font-bold text-3xl my-4'>{title}</div>
        <div>{overview}</div>
        <div className='my-5'>
            <button className='p-2 w-24 bg-white text-black rounded-md cursor-pointer hover:opacity-80'>▶️ Play</button>
            <button className='p-2 ml-2 bg-white text-black rounded-md cursor-pointer hover:opacity-80'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle