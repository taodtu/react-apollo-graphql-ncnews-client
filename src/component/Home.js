import React from 'react';

const Home = () => {
 return (
  <div>
   <h3>Welcome to the home page of react-apollo-graphql-client, please click the tab link to explore more, <span role="img" aria-label="smiley face">😀️</span>
   </h3>
   <ul><h3 style={{ "color": "rgb(184, 8, 8)" }}>Features</h3></ul>
   <li>Data manipulations on array and object are ensured <span className="strong">not mutating</span> the original data by using destructuring and spread operator.</li>
   <li>Embrace <span className="strong">declarative data fetching</span> using Apollo built-in Query/Mutation component with <span className="strong">Render Props</span> Pattern.</li>
   <li>All graphQL mutations are achieved using <span className="strong">Apollo Cache</span>, rather than refetching from the server after mutation.</li>
   <li><span className="strong">Offset-based pagination</span> is implemented on topics and users page, while <span className="strong">cursor-based pagination</span> is applied on articles page.</li>
   <li>With implementation of <span className="strong">React Hooks</span>, all components are writen as <span className="strong">functional stateless</span>.</li>
   <li><span className="strong">Optimistic response</span> is implemented on article vote button.</li>
   <li><span className="strong">Prefetching data</span> is applied on Topic/User list item. So the articles data is fetched and stored in cache when mouse is hovering on it, and show immediately when user click. This feature is not working on Mobile device while no onMouseOver is enabled.</li>
  </div>
 );
};

export default Home;