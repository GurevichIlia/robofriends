import React, { BaseSyntheticEvent, Component } from 'react';
import CardList from '../components/CardList/CardList';
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';
import Scroll from '../components/Scroll/Scroll';
import SearchBox from '../components/SearchBox/SearchBox';
import { Robot } from '../interfaces/robot.interface';

export interface State {
  robots: Robot[],
  searchField: string
}
const state: State = {
  robots: [],
  searchField: ''
}

class App extends Component<any, State> {
  constructor() {
    super(null);
    this.state = state
  }

  componentDidMount() {
    console.log('MOUNTED')
    fetch('https://jsonplaceholder.cypress.io/users')
      .then<Robot[]>(response => response.json())
      .then(users => this.setState({ robots: users, searchField: '' }))

  }

  public onSearchChange = (event: BaseSyntheticEvent): void => {
    this.setState({ searchField: event?.target?.value })
  }

  render() {
    console.log('render')
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()) || robot.email.toLowerCase().includes(searchField.toLowerCase()))

    if (!robots.length) {
      return <h1>Loading</h1>
    }

    return (
      <div className='tc' >
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App