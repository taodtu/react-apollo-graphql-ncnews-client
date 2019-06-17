import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import TopicItem from './TopicItem';
import Articles from './ArticleList';
import ARTICLE_FRAGMENT from './articleFragment';

const GET_TOPICS = gql`
{
  topics{
    slug
    description
    article_count
    comment_count
    articles{
     ...article
  }
}} ${ARTICLE_FRAGMENT}
`;
class Topic extends Component {
 state = {
  slugSelected: null,
  topic: null
 }
 onTopicSelected = ({ target }, topics) => {
  this.setState(() => ({
   slugSelected: target.value,
   topic: topics.filter(topic => topic.slug === target.value)[0]
  }));
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
      <select name="topic" onChange={(event) => this.onTopicSelected(event, topics)}>
       <option value=''>Please select a topic</option>
       {topics.map(topic => (
        <option key={topic.slug} value={topic.slug}>
         {topic.slug}
        </option>
       ))}
      </select>
      {this.state.slugSelected && <TopicItem topic={topics.filter(topic => topic.slug === this.state.slugSelected)[0]} />}
      <hr />
      {this.state.slugSelected && <Articles articles={this.state.topic.articles} />}
     </div>
    );
   }}
  </Query>
  )
 }
};

export default Topic
export { GET_TOPICS }