import React from 'react';
import Style from './ArticleItem.module.css';
import { Link } from '@reach/router';

const ArticleItem = ({ article: { article_id, title, votes, created_at, comment_count } }) => {
  return (
    <div className={Style.item}>
      <p className={Style.tag}><Link to={`/articles/${article_id}`} >Title: {title}</Link></p>
      <p className={Style.tag}>Created_at: {created_at} </p>
      <div className={Style.tag}>
        <p>Votes: {votes} Comment_count: {comment_count}</p>
      </div>

    </div>)

}
export default ArticleItem;