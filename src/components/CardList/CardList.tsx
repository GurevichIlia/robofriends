import React from 'react';
import { Robot } from '../../interfaces/robot.interface';
import Card from '../Card/Card';

const CardList = ({ robots }: { robots: Robot[] }) => {

  const cardsArray = robots.map(robot => {
    return <Card key={robot.id} robot={robot} />
  })

  return (
    <div>{cardsArray}</div>
  )
}

export default CardList