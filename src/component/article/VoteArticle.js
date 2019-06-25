import { VOTE_ARTICLE } from '../../constant/Mutation';
import { Mutation } from 'react-apollo';
import { GET_ARTICLE } from '../../constant/Query';
import { Button } from '@material-ui/core';
import React from 'react';

const VoteArticle = ({ id, votes, change }) => {
  return (
    <Mutation mutation={VOTE_ARTICLE}
      update={(cache, { data: { updateArticle } }) => {
        const { getArticle } = cache.readQuery({ query: GET_ARTICLE, variables: { id } });
        const { votes } = updateArticle;
        cache.writeQuery({
          query: GET_ARTICLE,
          variables: { id },
          data: { getArticle: { ...getArticle, votes } }
        })
      }}
      variables={{ id, votes: change }}
      optimisticResponse={{
        __typename: "Mutation",
        updateArticle: {
          __typename: "Article",
          article_id: id,
          id,
          votes: votes + change
        }
      }}
    >
      {(updateArticle, { data, error }) => {
        if (error) return `Error! ${error.message}`;
        if (change > 0) return <Button variant="outlined" size="small" color="primary"
          onClick={updateArticle}> + vote! </Button>;
        if (change < 0) return <Button variant="outlined" size="small" color="secondary"
          onClick={updateArticle}> - vote! </Button>;
      }}
    </Mutation>

  );
};

export default VoteArticle;