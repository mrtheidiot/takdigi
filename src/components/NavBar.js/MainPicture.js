import React from 'react'
import dog1 from './../../assets/p1.jpg';
import './MainPicture.css'

const MainPicture = (props) => {
  return (
    <div className='mainPicture-main'>
      <img src={dog1} />
    </div>
  )
}

export default MainPicture
