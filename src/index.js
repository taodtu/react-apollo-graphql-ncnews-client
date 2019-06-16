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
const errorLink = onError(({ graphQLErrors, networkError }) => {
 if (graphQLErrors) {
  graphQLErrors.map(({ message, locations, path }) =>
   console.log(
    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
   ),
  );
 }

 if (networkError) {
  console.log(`[Network error]: ${networkError}`);
 }
});

const link = ApolloLink.from([errorLink, httpLink]);
const client = new ApolloClient({
 link: httpLink,
 cache,
})


ReactDOM.render(
 <ApolloProvider client={client}>
  <App />
 </ApolloProvider>, document.getElementById('root'));


