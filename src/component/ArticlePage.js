import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_ARTICLE } from '../constant/Query';
import { ADD_COMMENT } from '../constant/Mutation'
import Article from './Article';
import Comment from './Comment';

class ArticlePage extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <Query query={GET_ARTICLE} variables={{ id }} >
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const { getArticle: { comments, ...rest } } = data;
            console.log(comments)
            return (
              <div>
                <h3>Article (id:{id}) and Comments </h3>
                <Article {...rest} />
                {comments.map(comment => <Comment {...comment} key={comment.comment_id} />)}
              </div>
            );
          }}
        </Query>
        <hr />
        <Mutation mutation={ADD_COMMENT} update={(cache, { data: { createComment } }) => {

        }} >

        </Mutation>
      </div>
    );
  }
}

export default ArticlePage;