import React from 'react';
import { Robot } from '../../interfaces/robot.interface';

const Card = ({ robot: {id, name, email} }: { robot: Robot }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card