import React from 'react';
import { Robot } from '../../interfaces/robot.interface';
import Card from '../Card/Card';

const CardList = ({ robots, select }: { robots: Robot[], select: (id: number) => void }) => {

  const cardsArray = robots.map(robot => {
    return (
      <span key={robot.id} onClick={() => select(robot.id)}>
        <Card robot={robot} />
      </span>
    )
  })

  return (
    <div>{cardsArray}</div>
  )
}

export default CardList