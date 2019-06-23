import React, { Component } from 'react';
import './App.css';
import Topic from './component/Topic';
import User from './component/User';
import ArticlePage from './component/article/ArticlePage';
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
            <User path="/users" />
            <ArticlePage path="/articles/:id" />
          </Router>
        </div>
      </div>
    )
  };
}

export default App;
