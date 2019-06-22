import React, { Component } from 'react';
import Style from './TopicItem.module.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ArticleItem from './ArticleItem';

const GET_ARTICLES = gql`
query($username: String!)
  {articlesByAuthor (username:$username ) {
    article_id
    title,
    votes,
    created_at,
    comment_count,
}}`;
class UserItem extends Component {
 state = {
  clicked: false,
 }
 handleClick = (clicked) => {
  this.setState({
   clicked: !clicked,
  })
 }

 render() {
  const { user } = this.props;
  const { username } = user;
  const { clicked } = this.state;
  return (
   <div>
    <div className={Style.topic} onClick={() => this.handleClick(clicked)}>
     <strong className={Style.item} style={{ "textAlign": "center", "marginTop": "0.8em" }}>Username: {username} </strong>
     <p className={Style.item}>name:  {user.name} </p>
     <p className={Style.item} >Article_count: {user.article_count} Comment_count: {user.comment_count}</p>
    </div>
    {clicked && <Query query={GET_ARTICLES} variables={{ username }} >
     {({ error, data }) => {
      if (error) return `Error! ${error.message}`;
      const { articlesByAuthor } = data;
      return (
       <div>
        <h4>Articles belong to {username}, click article_id to see more details</h4>
        {articlesByAuthor && <div className={Style.articles} >
         {articlesByAuthor.map(article => <ArticleItem article={article} key={article.article_id} />)}
        </div>}
       </div>
      );
     }}
    </Query>}
   </div>
  )
 }
}
export default UserItem;