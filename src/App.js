import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Khairul', age: 25},
      {name: 'Stephanie', age: 24},
    ]
  }
  return (
    <div className="App">
      <h1>Hi, I`m a React App</h1>
      <p>This is really working!</p>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobies is fishing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
}

export default App;
