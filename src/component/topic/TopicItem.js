import React, { Component } from 'react';
import Style from './TopicItem.module.css';
import { Query } from 'react-apollo';
import { GET_ARTICLES_TOPIC } from '../../constant/Query'
import ArticleItem from '../article/ArticleItem';

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
        <div className={Style.topic} onClick={() => this.handleClick(clicked)}>
          <strong className={Style.item} style={{ "textAlign": "center", "marginTop": "0.8em" }}>Slug:  {slug} </strong>
          <p className={Style.item}>Description:  {topic.description} </p>
          <p className={Style.item} >Article_count: {topic.article_count} Comment_count: {topic.comment_count}</p>
        </div>
        {clicked && <Query query={GET_ARTICLES_TOPIC} variables={{ slug }} >
          {({ error, loading, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const { articlesByTopic } = data;
            return (
              <div>
                <h4>Articles belong to {slug}, click article_id to see more details</h4>
                {articlesByTopic && <div className={Style.articles} >
                  {articlesByTopic.map(article => <ArticleItem article={article} key={article.article_id} />)}
                </div>}
              </div>
            );
          }}
        </Query>}
      </div>
    )
  }
}
export default TopicItem;