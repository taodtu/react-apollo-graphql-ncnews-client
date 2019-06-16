import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';

const httpLink = new HttpLink({
 uri: "https://nc-news-graphql-server.herokuapp.com/graphql"
});
const cache = new InMemoryCache();
const client = new ApolloClient({
 link: httpLink,
 cache,
})


ReactDOM.render(<App />, document.getElementById('root'));


