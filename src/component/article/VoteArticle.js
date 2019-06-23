import { VOTE_ARTICLE } from '../../constant/Mutation';
import { Mutation } from 'react-apollo';
import { GET_ARTICLE } from '../../constant/Query';
import { Button } from '@material-ui/core';
import React from 'react';

const VoteArticle = ({ id }) => {
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
    >
      {(updateArticle, { data, loading, error }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return <Button variant="outlined" size="small" color="primary"
          onClick={() => updateArticle({ variables: { id, votes: 1 } })}> + vote! </Button>
      }}
    </Mutation>

  );
};

export default VoteArticle;