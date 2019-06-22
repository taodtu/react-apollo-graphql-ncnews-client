import React from 'react';
import Style from './Comment.module.css';
import { Button } from '@material-ui/core';

const Comment = ({ comment_id,
 author,
 body,
 votes,
 created_at }) => {
 return (
  <div className={Style.article} >
   <div className={Style.left}>
    <p>Comment_id: {comment_id}</p>
    <p>Author: {author}</p>
    <p>Date: {created_at}</p>
   </div>
   <div className={Style.mid}>
    <p>Comment: {body}</p>
   </div>
   <div className={Style.right}>
    <p>Votes: {votes}</p>
    <Button variant="outlined" size="small" color="primary"> + vote! </Button>
    <Button variant="outlined" size="small" color="secondary"> Delete </Button>
   </div>
  </div>
 );
};

export default Comment;