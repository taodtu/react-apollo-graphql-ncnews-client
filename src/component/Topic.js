import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import TopicItem from './TopicItem';

const GET_TOPICS = gql`
{
  topics{
    slug
    description
    article_count
    comment_count
    articles{
     article_id
     title
     body
     votes
     topic
     author
     created_at
    user {
      username,
      name}
  comment_count}
  }
}`;
class Topic extends Component {
 state = { slugSelected: null }
 onTopicSelected = ({ target }) => {
  this.setState(() => ({ slugSelected: target.value }));
 };

 render() {
  return (<Query query={GET_TOPICS} >
   {({ loading, error, data }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    const { topics } = data;
    return (
     <div>
      <h3>Topics</h3>
      <select name="topic" onChange={this.onTopicSelected}>
       <option value=''>Please select a topic</option>
       {topics.map(topic => (
        <option key={topic.slug} value={topic.slug}>
         {topic.slug}
        </option>
       ))}
      </select>
      <TopicItem topic={topics.filter(topic => topic.slug === this.state.slugSelected)[0]} />
     </div>
    );
   }}
  </Query>
  )
 }
};
export default Topic