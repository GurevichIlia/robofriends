import React, { BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Sticky from '../components/Sticky/Sticky';
import { Robot } from '../interfaces/robot.interface';


const Dashboard = ({
  robots,
  onSearchChange
}: {
  robots: Robot[],
  onSearchChange: (e: BaseSyntheticEvent) => void,

}) => {
  const navigate = useNavigate();

  const select = (id: number) => {
    navigate(`/details/${id}`)
  }

  return (
    <div>
      <Sticky>
        <SearchBox onSearchChange={onSearchChange} />
      </Sticky>
      <CardList robots={robots} select={select} />
    </div>
  )
}

export default Dashboard