import React, { Component } from 'react';
import Style from '../topic/TopicItem.module.css';
import { Query } from 'react-apollo';
import { GET_ARTICLES_USER } from '../../constant/Query'
import ArticleItem from '../article/ArticleItem';
import { Button } from '@material-ui/core';

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
        {clicked && <Query query={GET_ARTICLES_USER} variables={{ username, offset: 0, limit: 3 }} >
          {({ error, loading, data, fetchMore }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const { articlesByAuthor } = data;
            return (
              <div>
                <h4>Articles belong to {username}, click article_id to see more details</h4>
                {articlesByAuthor && <div className={Style.articles} >
                  {articlesByAuthor.map(article => <ArticleItem article={article} key={article.article_id} />)}
                </div>}
                <div className={Style.button} >
                  <div className={Style.buttonitem}>
                    <Button variant="outlined" size="small" color="primary"
                      onClick={() =>
                        fetchMore({
                          variables: {
                            offset: articlesByAuthor.length
                          },
                          updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return { ...prev, articlesByAuthor: [...prev.articlesByAuthor, ...fetchMoreResult.articlesByAuthor] }
                          }
                        })}
                    > More </Button>
                  </div>
                  <Button variant="outlined" size="small" color="primary"> Show all </Button>
                </div>

              </div>
            );
          }}
        </Query>}
      </div>
    )
  }
}
export default UserItem;