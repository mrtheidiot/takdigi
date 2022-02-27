import React from 'react'
import './Galeria.css';

const Galeria = (props) => {
  return (
    <div className='galeria_main'>
        <div className='galeria_sub'>
            <img src={props.dogo1} />
        </div>
        <div className='galeria_sub'>
            <img src={props.dogo2} />
        </div>
    </div>
  )
}

export default Galeria