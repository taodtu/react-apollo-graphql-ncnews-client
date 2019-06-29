import React, { useState } from 'react';
import Style from '../topic/TopicItem.module.css';
import { Query } from 'react-apollo';
import { GET_ARTICLES_USER } from '../../constant/Query'
import ArticleItem from '../article/ArticleItem';
import { Button } from '@material-ui/core';
import Loader from 'react-loader-spinner';

const UserItem = ({ user, client }) => {
  const [clicked, setClick] = useState(false)
  const handleClick = (clicked) => {
    setClick(!clicked)
  }
  const { username } = user;
  return (
    <div>
      <div className={Style.topic}
        onClick={() => handleClick(clicked)}
        onMouseOver={() =>
          client.query({
            query: GET_ARTICLES_USER,
            variables: { username, offset: 0, limit: 3 }
          })
        }
      >
        <strong className={Style.item} style={{ "textAlign": "center", "marginTop": "0.8em" }}>Username: {username} </strong>
        <p className={Style.item}>name:  {user.name} </p>
        <p className={Style.item} >Article_count: {user.article_count} Comment_count: {user.comment_count}</p>
      </div>
      {clicked && <Query query={GET_ARTICLES_USER}
        variables={{ username, offset: 0, limit: 3 }}
        notifyOnNetworkStatusChange={true}
      >
        {({ error, loading, data, fetchMore }) => {
          if (loading) return <Loader
            type="Puff"
            color="#00BFFF"
            height="100"
            width="100"
          />;
          if (error) return `Error! ${error.message}`;
          const { articlesByAuthor } = data;
          return (
            <div>
              <h4>Articles belong to {username}, click title to see more details</h4>
              {articlesByAuthor && <div className={Style.articles} >
                {articlesByAuthor.map(article => <ArticleItem article={article} key={article.article_id} />)}
              </div>}
              <div className={Style.button} >
                <div className={Style.buttonitem}>
                  <Button variant="outlined" size="medium" color="primary"
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
                <div className={Style.buttonitem}>
                  <Button variant="outlined" size="medium" color="primary"
                    onClick={() =>
                      fetchMore({
                        variables: {
                          offset: articlesByAuthor.length,
                          limit: null
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                          if (!fetchMoreResult) return prev;
                          return { ...prev, articlesByAuthor: [...prev.articlesByAuthor, ...fetchMoreResult.articlesByAuthor] }
                        }
                      })}
                  > Show all </Button></div>
                <Button variant="outlined" size="medium" color="secondary"
                  onClick={() => handleClick(clicked)}
                > Close all </Button>
              </div>
            </div>
          );
        }}
      </Query>}
    </div>
  )
};

export default UserItem;