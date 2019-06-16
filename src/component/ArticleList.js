import React from 'react';

const Articles = ({ articles }) => {
 return articles
  ? (
   <div >
    <h3>Articles List</h3>
    <div className="topic">
     <span style={{ width: '20%' }}>Article_id </span>
     <span style={{ width: '20%' }}>Author </span>
     <span style={{ width: '20%' }}>Votes </span>
     <span style={{ width: '20%' }}>Created_at </span>
     <span style={{ width: '20%' }}>Comment count </span>
    </div>
    {articles.map(article =>
     <div key={article.article_id} className="topic">
      <span style={{ width: '20%' }}>{article.article_id} </span>
      <span style={{ width: '20%' }}>{article.author} </span>
      <span style={{ width: '20%' }}>{article.votes} </span>
      <span style={{ width: '20%' }}>{article.created_at} </span>
      <span style={{ width: '20%' }}>{article.comment_count} </span>
     </div>)}
   </div>)
  : null
}
export default Articles