import React from 'react';
import Style from './Comment.module.css';
import { Button } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { DELETE_COMMENT } from '../constant/Mutation';
import { GET_ARTICLE } from '../constant/Query';

const Comment = ({ comment_id,
 article_id,
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

    <div className={Style.button}>
     <Mutation mutation={DELETE_COMMENT}
      update={(cache, { data: { deleteComment } }) => {
       if (deleteComment) {
        const { getArticle } = cache.readQuery({ query: GET_ARTICLE, variables: { id: article_id } });
        const { comments, comment_count } = getArticle;
        const newCount = comment_count - 1;
        const newComments = comments.filter(comment => comment.comment_id !== comment_id)
        cache.writeQuery({
         query: GET_ARTICLE,
         variables: { id: article_id },
         data: { getArticle: { ...getArticle, comment_count: newCount, comments: newComments } }
        })
       }
      }
      }
     >{(deleteComment, { data, loading, error }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return <Button variant="outlined" size="small" color="secondary"
       onClick={() => deleteComment({ variables: { id: comment_id } })}> Delete </Button>
     }}
     </Mutation>
    </div>
   </div>
  </div>
 );
};

export default Comment;