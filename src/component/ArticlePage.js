import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_ARTICLE = gql`
query($id: ID!)
  {getArticle(article_id:$id ) {
    article_id
    title,
    body,
    author,
    topic,
    votes,
    created_at,
    comment_count,
}}`;

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