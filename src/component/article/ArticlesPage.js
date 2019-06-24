import React from 'react';
import { Query } from 'react-apollo';
import Style from '../topic/TopicItem.module.css';
import { GET_ARTICLES } from '../../constant/Query'
import ArticleItem from './ArticleItem';
import { Button } from '@material-ui/core';

const ArticlesPage = () => {
 return (
  <Query query={GET_ARTICLES}
   variables={{ cursor: "2018-05-31T15:59:13.341Z", limit: 15 }}
   notifyOnNetworkStatusChange={true}
  >
   {({ error, loading, data, fetchMore }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    const { articles: { pageInfo: { hasNextPage, endCursor }, edges } } = data;
    return (
     <div>
      <h4>Articles ordered by added date, click article_id to see more details</h4>
      <div className={Style.articles} >
       {edges.map(article => <ArticleItem article={article} key={article.article_id} />)}
      </div>
      <div className={Style.button} >
       <div className={Style.buttonitem}>
        {hasNextPage && <Button variant="outlined" size="medium" color="primary"
         onClick={() =>
          fetchMore({
           variables: {
            cursor: endCursor
           },
           updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return {
             ...prev, articles: {
              ...prev.articles,
              ...fetchMoreResult.articles, edges: [
               ...prev.articles.edges,
               ...fetchMoreResult.articles.edges
              ]
             }
            };
           }
          })}
        > More articles</Button>}
       </div>
       <div className={Style.buttonitem}>
        {hasNextPage && <Button variant="outlined" size="medium" color="primary"
         onClick={() =>
          fetchMore({
           variables: {
            limit: null
           },
           updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return fetchMoreResult;
           }
          })}
        > Show all </Button>}</div>
      </div>
      <hr />
     </div>
    );
   }}
  </Query>
 );
};

export default ArticlesPage;