import React, { Component } from 'react';
import './App.css';

//Components
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Khairul', age: 25},
      {name: 'Stephanie', age: 24},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I`m a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobies is fishing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }

}

export default App;