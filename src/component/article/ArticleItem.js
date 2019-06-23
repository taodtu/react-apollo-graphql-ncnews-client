import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from '@reach/router';

const ArticleItem = ({ article: { article_id, title, votes, created_at, comment_count } }) => {
  return (
    <div className="item" style={{ "margin": "0em 0em 0.5em" }}>
      <div className="article-item">
        <span style={{ width: '20%' }}>article_id </span>
        <span style={{ width: '13%' }}>votes </span>
        <span style={{ width: '20%' }}>comment_count </span>
        <span style={{ width: '47%' }}>created_at</span>
      </div>
      <div className="article-item">
        <span style={{ width: '20%' }}>
          <Link to={`/articles/${article_id}`} ><Button variant="contained" size="small" color="primary"> {article_id} </Button></Link> </span>
        <span style={{ width: '13%' }}>{votes} </span>
        <span style={{ width: '20%' }}>{comment_count} </span>
        <span style={{ width: '47%' }}>{created_at} </span>
      </div>
      <p style={{ "margin": '0.5em 0.4em 0.8em' }}>title: {title} </p>
    </div>)

}
export default ArticleItem;