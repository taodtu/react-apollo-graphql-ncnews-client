import React from 'react';
import { DELETE_COMMENT } from '../../constant/Mutation';
import { GET_ARTICLE } from '../../constant/Query';
import { Mutation } from 'react-apollo';
import { Button } from '@material-ui/core';

const DeleteComment = ({ article_id, comment_id }) => {
  return (
    <Mutation mutation={DELETE_COMMENT}
      update={(cache, { data: { deleteComment } }) => {
        if (deleteComment) {
          const { getArticle } = cache.readQuery({ query: GET_ARTICLE, variables: { id: article_id } });
          const { comments, comment_count } = getArticle;
          const newCount = comment_count - 1;
          const newComments = comments.filter(comment => comment.comment_id !== comment_id)
          cache.writeQuery({
            query: GET_ARTICLE,
            variables: { id: article_id },
            data: { getArticle: { ...getArticle, comment_count: newCount, comments: newComments } }
          })
        }
      }
      }
    >{(deleteComment, { data, loading, error }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return <Button variant="contained" size="small" color="secondary"
        onClick={() => deleteComment({ variables: { id: comment_id } })}> Delete </Button>
    }}
    </Mutation>
  );
};

export default DeleteComment;