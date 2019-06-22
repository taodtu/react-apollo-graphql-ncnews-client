import React from 'react';
import { GET_TOPICS } from '../constant/Query'
import { Query } from 'react-apollo';
import TopicItem from './TopicItem';
import Style from './Topic.module.css'

const Topic = () => {
  return (<Query query={GET_TOPICS} >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      const { topics } = data;
      return (
        <div>
          <h3>Topics, click to see articles on each slug </h3>
          <div className={Style.topic} >
            {topics.map(topic => <TopicItem topic={topic} key={topic.slug} />)}
          </div>
        </div>
      );
    }}
  </Query>
  )
};

export default Topic
