## Features

All the data manipulations on array and object are ensured **`not mutating`** the original data by using destructuring and spread operator.

Embrace **`declarative data fetching`** using Apollo built-in Query/Mutation component with **`Render Props Pattern`**.

**`Offset-based pagination`** is implemented on topics and users page, while **`cursor-based pagination`** is applied on articles page.

All graphQL mutations are achieved using **`Apollo Cache`**, rather than refetching from the server after mutation.

**`Optimistic response`** is implemented on article vote button.

**`Prefetching data`** is applied on Topic/User list item. So the articles data is fetched and stored in cache when mouse is hovering on it, and show immediately when user click on it. This feature is not working on Mobile device while no onMouseOver is enabled.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

