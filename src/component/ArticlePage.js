import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ARTICLE } from '../constant/Query'
import Article from './Article';

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
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default ArticlePage;