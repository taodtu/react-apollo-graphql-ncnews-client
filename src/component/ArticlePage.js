import React, { Component } from 'react';

class ArticlePage extends Component {
 render() {
  const { id } = this.props;
  return (
   <div>
    <p>{id}</p>
   </div>
  );
 }
}

export default ArticlePage;