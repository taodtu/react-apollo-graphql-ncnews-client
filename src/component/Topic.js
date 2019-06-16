import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_TOPICS = `
{
  topics{
    slug
    description
    article_count
    comment_count
  }
}`;