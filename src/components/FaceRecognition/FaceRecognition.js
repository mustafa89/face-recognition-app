import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='flex justify-center'>
      <div className='absolute ma2'>
        <img
          className='mb4'
          id='image'
          alt=''
          src={imageUrl}
          width='500px'
          height='auto'
        ></img>
        <div
          className='boundary-box'
          style={{
            top: box.top,
            right: box.right,
            bottom: box.bottom,
            left: box.left
          }}
        ></div>
      </div>
    </div>
  )
}

export default FaceRecognition
