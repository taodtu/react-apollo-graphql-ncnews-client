import React, { Component } from 'react';
import Style from './TopicItem.module.css';
import { Query } from 'react-apollo';
import { GET_ARTICLES_TOPIC } from '../../constant/Query'
import ArticleItem from '../article/ArticleItem';
import { Button } from '@material-ui/core';
import Loader from 'react-loader-spinner';

class TopicItem extends Component {
  state = {
    clicked: false,
  }
  handleClick = (clicked) => {
    this.setState({
      clicked: !clicked,
    })
  }
  render() {
    const { topic } = this.props;
    const { slug } = topic;
    const { clicked } = this.state;
    return (
      <div>
        <div className={Style.topic}
          onClick={() => this.handleClick(clicked)}
          onMouseOver={() =>
            this.props.client.query({
              query: GET_ARTICLES_TOPIC,
              variables: { slug, offset: 0, limit: 3 }
            })
          }
        >
          <strong className={Style.item} style={{ "textAlign": "center", "marginTop": "0.8em" }}>Slug:  {slug} </strong>
          <p className={Style.item}>Description:  {topic.description} </p>
          <p className={Style.item} >Article_count: {topic.article_count} Comment_count: {topic.comment_count}</p>
        </div>
        {clicked && <Query query={GET_ARTICLES_TOPIC}
          variables={{ slug, offset: 0, limit: 3 }}
          notifyOnNetworkStatusChange={true} >
          {({ error, loading, data, fetchMore }) => {
            if (loading) return <Loader
              type="Puff"
              color="#00BFFF"
              height="100"
              width="100"
            />;
            if (error) return `Error! ${error.message}`;
            const { articlesByTopic } = data;
            return (
              <div>
                <h4>Articles belong to {slug}, click title to see more details</h4>
                {articlesByTopic && <div className={Style.articles} >
                  {articlesByTopic.map(article => <ArticleItem article={article} key={article.article_id} />)}
                </div>}

                <div className={Style.button} >
                  <div className={Style.buttonitem}>
                    <Button variant="outlined" size="medium" color="primary"
                      onClick={() =>
                        fetchMore({
                          variables: {
                            offset: articlesByTopic.length
                          },
                          updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return { ...prev, articlesByTopic: [...prev.articlesByTopic, ...fetchMoreResult.articlesByTopic] }
                          }
                        })}
                    > More </Button>
                  </div>
                  <div className={Style.buttonitem}>
                    <Button variant="outlined" size="medium" color="primary"
                      onClick={() =>
                        fetchMore({
                          variables: {
                            offset: articlesByTopic.length,
                            limit: null
                          },
                          updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return { ...prev, articlesByTopic: [...prev.articlesByTopic, ...fetchMoreResult.articlesByTopic] }
                          }
                        })}
                    > Show all </Button></div>
                  <Button variant="outlined" size="medium" color="secondary"
                    onClick={() => this.handleClick(clicked)}
                  > Close all </Button>
                </div>
              </div>
            );
          }}
        </Query>}
      </div>
    )
  }
}
export default TopicItem;