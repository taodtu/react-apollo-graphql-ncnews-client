import React from 'react';
import { GET_TOPICS } from '../../constant/Query'
import { Query } from 'react-apollo';
import TopicItem from './TopicItem';
import Style from './Topic.module.css';
import Loader from 'react-loader-spinner';

const Topic = () => {
  return (<Query query={GET_TOPICS} >
    {({ loading, error, data, client }) => {
      if (loading) return <Loader
        type="Puff"
        color="#00BFFF"
        height="100"
        width="100"
      />;
      if (error) return `Error! ${error.message}`;
      const { topics } = data;
      return (
        <div>
          <h3>Topics, click to see articles on each slug </h3>
          <div className={Style.topic} >
            {topics && topics.map(topic => <TopicItem topic={topic} key={topic.slug} client={client} />)}
          </div>
        </div>
      );
    }}
  </Query>
  )
};

export default Topic
