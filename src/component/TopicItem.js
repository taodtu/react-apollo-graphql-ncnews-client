import React, { Component } from 'react';
import Style from './TopicItem.module.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ArticleItem from './ArticleItem';

const GET_ARTICLES = gql`
query($slug: String!)
  {articlesByTopic (topic:$slug ) {
    article_id
    title,
    votes,
    created_at
}}`;
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
        {clicked && <Query query={GET_ARTICLES} variables={{ slug }} >
          {({ error, data }) => {
            console.log(data)
            return <p>hi</p>
            // if (error) return `Error! ${error.message}`;
            // const { articlesByTopic } = data;
            // console.log(data)
            // return (
            //   <div>
            //     <h3>articles belong to {slug}, click article_id to see more details</h3>
            //     <div className={Style.articles} >
            //       {articlesByTopic.map(article => <ArticleItem article={article} key={article.article_id} />)}
            //     </div>
            //   </div>
            // );
          }}
        </Query>}
      </div>
    )
  }
}
export default TopicItem;