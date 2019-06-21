import React, { Component } from 'react';
import './App.css';
import Topic from './component/Topic';
import { Link, Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nc-news</h1>
        <Link className="title-link" to="/" >Home</Link>
        <Link className="title-link" to="/topics" >Topics</Link>
        <Link className="title-link" to="/users" >Users</Link>
        <div>
          <Router>
            <Topic path="/topics" />
          </Router>
        </div>
      </div>
    )
  };
}

export default App;
