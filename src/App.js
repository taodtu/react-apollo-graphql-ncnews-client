import React, { Component } from 'react';
import './App.css';
import logo from './component/032-fake news.svg';
import Topic from './component/topic/Topic';
import User from './component/user/User';
import ArticlePage from './component/article/ArticlePage';
import ArticlesPage from './component/article/ArticlesPage';
import { Link, Router } from '@reach/router';
import Footer from './component/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="" />
          <h1>Nc-news</h1>
        </header>
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
        <Footer />
      </div>
    )
  };
}

export default App;
