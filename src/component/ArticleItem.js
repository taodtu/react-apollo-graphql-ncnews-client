import React from 'react';

const ArticleItem = ({ article: { article_id, title, votes, created_at, comment_count } }) => {
 return (
  <div className="article-item">
   <span style={{ width: '20%' }}>{article_id} </span>
   <span style={{ width: '20%' }}>{title} </span>
   <span style={{ width: '20%' }}>{votes} </span>
   <span style={{ width: '20%' }}>{created_at} </span>
   <span style={{ width: '20%' }}>{comment_count} </span>
  </div>)

}
export default ArticleItem;