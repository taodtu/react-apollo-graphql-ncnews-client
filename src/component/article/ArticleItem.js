import React from 'react';
import Style from './ArticleItem.module.css';
import { Button } from '@material-ui/core';
import { Link } from '@reach/router';

const ArticleItem = ({ article: { article_id, title, votes, created_at, comment_count } }) => {
  return (
    <div className={Style.item}>
      <div className="article-item">
        <span style={{ width: '30%' }}>article_id </span>
        <span style={{ width: '20%' }}>votes </span>
        <span style={{ width: '50%' }}>comment_count </span>
      </div>
      <div className="article-item">
        <span style={{ width: '30%' }}>
          <Link to={`/articles/${article_id}`} ><Button variant="contained" size="small" color="primary"> {article_id} </Button></Link> </span>
        <span style={{ width: '20%' }}>{votes} </span>
        <span style={{ width: '50%' }}>{comment_count} </span>
      </div>
      <p className={Style.tag}><strong>Title</strong>: {title} </p>
      <p className={Style.tag}>created_at: {created_at} </p>
    </div>)

}
export default ArticleItem;