import React from 'react';

const Home = () => {
 return (
  <div>
   <h3>Welcome to the home page of react-apollo-graphql-client, please click the tab link to explore more, 😀️
    </h3>
   <ul><h3>Features</h3></ul>
   <li>All the data manipulations on array and object are ensured <strong>not mutating</strong> the original data by using destructuring and spread operator.</li>
   <li>Embrace <strong>declarative data fetching</strong> using Apollo built-in Query/Mutation component with <strong>Render Props</strong> Pattern.</li>
   <li>All graphQL mutations are achieved using <strong>Apollo Cache</strong>, rather than refetching from the server after mutation.</li>
   <li><strong>Optimistic response</strong> is implemented on article vote button.</li>
  </div>
 );
};

export default Home;