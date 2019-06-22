import React from 'react';
import Style from './Article.module.css';
import { Button } from '@material-ui/core';
const Article = ({
 title,
 body,
 author,
 topic,
 votes,
 created_at,
 comment_count }) => {
 return (
  <div className={Style.article} >
   <div className={Style.left}>
    <p>Slug: {topic}</p>
    <p>Author: {author}</p>
    <p>Date: {created_at}</p>
    <p>Comments: {comment_count}</p>
   </div>
   <div className={Style.mid}>
    <p><strong>Title: {title}</strong></p>
    <p>Text: {body}</p>
   </div>
   <div className={Style.right}>
    <p>Votes:</p>
    <p>{votes}</p>
    <Button variant="outlined" size="small" color="primary"> + vote! </Button>
   </div>
  </div>
 );
};

export default Article;