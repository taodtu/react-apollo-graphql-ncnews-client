import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ARTICLE } from '../../constant/Query';
import Article from './Article';
import Comment from '../comment/Comment';
import AddComment from '../comment/AddComment';
import Loader from 'react-loader-spinner';

class ArticlePage extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <Query query={GET_ARTICLE} variables={{ id }} >
          {({ loading, error, data }) => {
            if (loading) return <Loader
              type="Puff"
              color="#00BFFF"
              height="100"
              width="100"
            />;
            if (error) return `Error! ${error.message}`;
            const { getArticle: { comments, ...rest } } = data;
            return (
              <div>
                <h3>Article and Comments </h3>
                <Article {...rest} />
                <hr />
                <AddComment id={id} />
                {comments.map(comment => <Comment {...comment} key={comment.comment_id} />)}
              </div>
            );
          }}
        </Query>
        <hr />
      </div>
    );
  }
}

export default ArticlePage;