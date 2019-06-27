# A React + Apollo + GraphQL Northcoders-News Client

This App is hosted on [here](https://tao-apollo-graphql-nc-news-client.netlify.com/).The server app is hosted on [here](https://nc-news-graphql-server.herokuapp.com/) and the source code can be found on [Github](https://github.com/taodtu/nc-news-react-graphql-client)

Northcoders News is a social news aggregation, web content rating, and discussion website. Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

## Features

All the data manipulations on array and object are ensured **`not mutating`** the original data by using destructuring and spread operator.

Embrace **`declarative data fetching`** using Apollo built-in Query/Mutation component with **`Render Props Pattern`**.

**`Offset-based pagination`** is implemented on topics and users page, while **`cursor-based pagination`** is applied on articles page.

All graphQL mutations are achieved using **`Apollo Cache`**, rather than refetching from the server after mutation.

**`Optimistic response`** is implemented on article vote button.

**`Prefetching data`** is applied on Topic/User list item. So the articles data is fetched and stored in cache when mouse is hovering on it, and show immediately when user click on it. This feature is not working on Mobile device while no onMouseOver is enabled.

- Responsive.

- Styling with [@material/ui v4.1.3](https://material-ui.com/).

- Routing with [@reach/router v1.1.0](https://reach.tech/router).

-   "apollo-cache-inmemory": "^1.6.2",
-   "apollo-client": "^2.6.2",
-   "apollo-link": "^1.2.12",
-   "apollo-link-error": "^1.1.11",
-   "apollo-link-http": "^1.5.15",
-   "graphql": "^14.3.1",
-   "graphql-tag": "^2.10.1",


