import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ARTICLE } from '../constant/Query'
import Article from './Article';

class ArticlePage extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <Query query={GET_ARTICLE} variables={{ id }} >
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const { getArticle } = data;
            console.log(data)
            return (
              <div>
                <h3>Article and Comments </h3>
                {/* <div className={Style.topic} >
                  {topics.map(topic => <TopicItem topic={topic} key={topic.slug} />)}
                </div> */}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default ArticlePage;