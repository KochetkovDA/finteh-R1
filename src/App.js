import React, { Component } from 'react';
import './App.css';
import ToDo from './components/to-do/To-Do.component'
import Counter from './components/counter/Counter.component'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Counter step={2} init={2} max={9} message='You shall not pass!'></Counter>
        <ToDo></ToDo>
      </div>
    );
  }
}

export default App;
