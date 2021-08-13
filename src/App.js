import React, { Component } from 'react';
import './App.css';
import CardList from './Components/CardList';
import { robots } from './Components/robots'
import SearchBox from './Components/SearchBox';

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

    const filteredRobots = this.robots.filter(robots =>{
      return robots.className.toLowerCase().includes(this.state.searchField.toLowerCase())
     })

    return (
      <div className="tc">
        <h1>Robot friends</h1>
        <SearchBox searchChange={this.state.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
  
}

export default App;
