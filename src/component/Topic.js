import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_TOPICS = gql`
{
  topics{
    slug
    description
    article_count
    comment_count
    articles {
     article_id
    }
  }
}`;
const Topic = ({ onTopicSelected }) => (
 <Query query={GET_TOPICS} >
  {({ loading, error, data }) => {
   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   return (
    <select name="topic" onChange={onTopicSelected}>
     {data.topics.map(topic => (
      <option key={topic.slug} value={topic.slug}>
       {topic.slug}
      </option>
     ))}
    </select>
   );
  }}
 </Query>);
export default Topic