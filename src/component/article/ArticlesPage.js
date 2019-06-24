import React from 'react';
import { Query } from 'react-apollo';
import Style from '../topic/TopicItem.module.css';
import { GET_ARTICLES } from '../../constant/Query'
import ArticleItem from './ArticleItem';
import { Button } from '@material-ui/core';

const ArticlesPage = () => {
 return (
  <Query query={GET_ARTICLES}
   variables={{ cursor: "2018-05-31T15:59:13.341Z", limit: 10 }}
   notifyOnNetworkStatusChange={true}
  >
   {({ error, loading, data, fetchMore }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    const { articles: { pageInfo, edges } } = data;
    return (
     <div>
      <h4>Articles ordered by added date, click article_id to see more details</h4>
      <div className={Style.articles} >
       {edges.map(article => <ArticleItem article={article} key={article.article_id} />)}
      </div>
      <div className={Style.button} >
       <div className={Style.buttonitem}>
        <Button variant="outlined" size="medium" color="primary"

        > More </Button>
       </div>
       <div className={Style.buttonitem}>
        <Button variant="outlined" size="medium" color="primary"
         onClick={() =>
          fetchMore({
           variables: {
            limit: null
           },
           updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            console.log(fetchMoreResult)
            return fetchMoreResult;
           }
          })}
        > Show all </Button></div>
      </div>
      <hr />
     </div>
    );
   }}
  </Query>
 );
};

export default ArticlesPage;