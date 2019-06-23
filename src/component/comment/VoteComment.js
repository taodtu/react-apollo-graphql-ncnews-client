import React from 'react';
import { VOTE_COMMENT } from '../../constant/Mutation';
import { GET_ARTICLE } from '../../constant/Query';
import { Mutation } from 'react-apollo';
import { Button } from '@material-ui/core';

const VoteComment = ({ article_id, comment_id }) => {
  return (
    <Mutation mutation={VOTE_COMMENT}
      update={(cache, { data: { updateComment } }) => {
        const { getArticle } = cache.readQuery({ query: GET_ARTICLE, variables: { id: article_id } });
        const { comments } = getArticle;
        const rest = comments.filter(comment => comment.comment_id !== comment_id);
        const newComments = [...rest, updateComment]
        cache.writeQuery({
          query: GET_ARTICLE,
          variables: { id: article_id },
          data: { getArticle: { ...getArticle, comments: newComments } }
        })
      }
      }
    >{(updateComment, { data, loading, error }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return <Button variant="outlined" size="small" color="primary"
        onClick={() => updateComment({ variables: { id: comment_id, newVote: 1 } })}>  + vote! </Button>
    }}
    </Mutation>
  );
};

export default VoteComment;