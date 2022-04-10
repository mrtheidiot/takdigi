import React from 'react'
import './ImageOverlay.css'

const ImageOverlay = ({img, alt, hideOverlayHandler}) => {
  return (
    <div className='imageoverlay' onClick={hideOverlayHandler}>
        <div className='imageoverlay__image'>
      <img src={img} alt={alt} />
        </div>
    </div>
  )
}

export default ImageOverlay