import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card/Card';
import { Robot } from '../interfaces/robot.interface';



const RobotDetails = ({ robots }: { robots: Robot[] }) => {

  const { id } = useParams()
  const navigate = useNavigate();

  const robotDetails = robots.find(robot => robot.id.toString() === id);

  return (
    <div>
      <div>
        {
          !robotDetails
            ? <h1 className='white'> Robot not found</h1>
            : <Card robot={robotDetails} />
        }
      </div>

      <button className='mt3 pa2 pointer' onClick={() => navigate('/')}>Back</button>
    </div>
  )
}

export default RobotDetails