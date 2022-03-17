import React from 'react'
import './ImageOverlay.css'

const ImageOverlay = ({img, alt}) => {
  return (
    <div className='imageoverlay'>
        <img src={img} alt={alt} />
    </div>
  )
}

export default ImageOverlay