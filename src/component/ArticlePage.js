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
        <Mutation mutation={ADD_COMMENT}
          // refetchQueries={[{
          //   query: GET_ARTICLE
          //   , variables: { id }
          // }]}
          //Update returned data from server!!
          update={(cache, { data: { createComment } }) => {
            const { getArticle } = cache.readQuery({ query: GET_ARTICLE, variables: { id } });
            const { comments, comment_count } = getArticle;
            const newCount = comment_count + 1;
            const newComments = [...comments, createComment]
            cache.writeQuery({
              query: GET_ARTICLE,
              variables: { id },
              data: { getArticle: { ...getArticle, comment_count: newCount, comments: newComments } }
            })
          }}
        >
          {(createComment, { data, loading, error }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
              <div>
                <form onSubmit={e => {
                  e.preventDefault();
                  createComment({ variables: { username: "grumpy19", id: 1, comment: "lovin it" } })
                }} >
                  <button type="submit" >Submit</button>
                </form>
              </div>
            )
          }}
        </Mutation>
        <hr />
      </div>
    );
  }
}

export default ArticlePage;