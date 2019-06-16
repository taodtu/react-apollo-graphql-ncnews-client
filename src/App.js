import React, { Component } from 'react';
import './App.css';
import Topic from './component/Topic'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nc-news</h1>
        <div>
          <Topic />
        </div>
      </div>
    )
  };
}

export default App;
