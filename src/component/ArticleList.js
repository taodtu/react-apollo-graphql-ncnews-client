import React from 'react';
import ArticleItem from './ArticleItem';

const Articles = ({ articles }) => {
 return (
  <div >
   <h3>Articles List</h3>
   <div className="topic">
    <span style={{ width: '10%' }}>Article_id </span>
    <span style={{ width: '20%' }}>Author </span>
    <span style={{ width: '30%' }}>Votes </span>
    <span style={{ width: '20%' }}>Created_at </span>
    <span style={{ width: '20%' }}>Comment count </span>
   </div>
   {articles.map(article =>
    <div key={article.article_id} >
     <ArticleItem {...article} />
    </div>)}
  </div>)
}
export default Articles