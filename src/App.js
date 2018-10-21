import React, { Component } from 'react';
import './App.css';
import Counter from './component/counter/Counter.component'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Counter step={2} init={2} max={9} message='You shall not pass!'></Counter>
      </div>
    );
  }
}

export default App;
