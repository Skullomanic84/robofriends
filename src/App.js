import React, { Component } from 'react';
import './App.css';
import CardList from './Components/CardList';
import { robots } from './Components/robots'
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';

class App extends Component {

  constructor(){
    super()
    this.state= {
      robots: robots,
      searchField: ''
    }
  }

onSearchChange =(event) => {
  this.setState({ searchField: event.target.value })
}

  render(){
      const { robots, searchField } = this.state;
      const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
     })

    return (
      <div className="tc">
        <h1 className='f1'>Robot friends</h1>
        <SearchBox searchChange={this.state.onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots} />
        </Scroll>
        
      </div>
    );
  }
  
}

export default App;
