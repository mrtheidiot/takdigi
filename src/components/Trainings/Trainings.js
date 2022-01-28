import React, { useState, useEffect } from 'react'
import './trainings.css';

import TrWrapper from '../../UI/TrWrapper'

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);
  useEffect(() => {
    getTrenings();
  }, [])

  const getTrenings = async () => {
    const respone = await fetch ("api/treningi/")
    const data = await respone.json();
    setTrainings(data);
  }
  const trening_indywid = trainings.filter(trening => trening.rodzaj === 2);
  console.log(trening_indywid);
  return (
    <div className='training-wrapper'>
        <div className='trening-section'>
          <div className='trening-name'>trening indywidualny</div>
          <ul>
            {trening_indywid.map(trening => 
              <li>
                {trening.title}
              </li>
            )}
          </ul>
        </div>
    </div>
  )
}
export default Trainings
