import React, { Component } from 'react';
import './App.css';
import Topic from './component/topic/Topic';
import User from './component/user/User';
import ArticlePage from './component/article/ArticlePage';
import ArticlesPage from './component/article/ArticlesPage';
import { Link, Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nc-news</h1>
        <Link className="title-link" to="/" >Home</Link>
        <Link className="title-link" to="/topics" >Topics</Link>
        <Link className="title-link" to="/users" >Users</Link>
        <Link className="title-link" to="/articles" >Articles</Link>
        <div>
          <Router>
            <Topic path="/topics" />
            <User path="/users" />
            <ArticlesPage path="/articles" />
            <ArticlePage path="/articles/:id" />
          </Router>
        </div>
      </div>
    )
  };
}

export default App;
