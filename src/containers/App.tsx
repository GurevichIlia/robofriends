import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Robot } from '../interfaces/robot.interface';
import Dashboard from '../pages/Dashboard';
import UserDetails from '../pages/RobotDetails';




const App = () => {

  const [robots, setRobots] = useState<Robot[]>([])
  const [searchField, setSearchField] = useState<string>('')

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then<Robot[]>(response => response.json())
      .then(users => setRobots(users))
  }, [])


  const onSearchChange = (event: BaseSyntheticEvent): void => {
    setSearchField(event?.target?.value)
  }


  const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()) || robot.email.toLowerCase().includes(searchField.toLowerCase()))

  if (!robots.length) {
    return <h1>Loading</h1>
  }

  return (
    <div className='tc' >
      <h1>RoboFriends</h1>
      <HashRouter>
        <Routes>
          <Route index element={<Dashboard robots={filteredRobots} onSearchChange={onSearchChange} />} />
          <Route path="details/:id" element={<UserDetails robots={robots} />} />
        </Routes>
      </HashRouter>

    </div>
  )

}

export default App