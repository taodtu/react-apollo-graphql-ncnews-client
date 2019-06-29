import React, { useState } from 'react';
import { ADD_COMMENT } from '../../constant/Mutation';
import { Mutation } from 'react-apollo';
import { GET_ARTICLE } from '../../constant/Query';
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import Style from './AddComment.module.css';

const AddComment = ({ id }) => {
 const [author, setAuthor] = useState('jessjelly');
 const [body, setBody] = useState('');

 const handleChange = ({ target }) => {
  const { value, name } = target;
  name === "author"
   ? setAuthor(value)
   : setBody(value)
 }

 const handleSubmit = (e, createComment) => {
  e.preventDefault();
  createComment({ variables: { username: author, id, comment: body } });
  setAuthor("jessjelly")
  setBody("")
 }
 return (
  <Mutation mutation={ADD_COMMENT}
   // refetchQueries={[{
   //   query: GET_ARTICLE
   //   , variables: { id }
   // }]}
   //Update returned data from server!!
   update={(cache, { data: { createComment } }) => {
    const { getArticle } = cache.readQuery({ query: GET_ARTICLE, variables: { id } });
    const { comments, comment_count } = getArticle;
    const newCount = comment_count + 1;
    const newComments = [createComment, ...comments]
    cache.writeQuery({
     query: GET_ARTICLE,
     variables: { id },
     data: { getArticle: { ...getArticle, comment_count: newCount, comments: newComments } }
    })
   }}
  >
   {(createComment, { data, loading, error }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    return (
     <div className={Style.outline}>
      <h4>Please provide a valid username to post a comment to this article</h4>
      <form onSubmit={(e) => handleSubmit(e, createComment)} >
       <div className={Style.form}>
        <div className={Style.username}>
         <Select value={author} autoWidth={true} name="author" onChange={handleChange}
         >
          <MenuItem value="jessjelly">jessjelly</MenuItem>
          <MenuItem value="tickle122">tickle122</MenuItem>
          <MenuItem value="grumpy19">grumpy19</MenuItem>
          <MenuItem value="happyamy2016">happyamy2016</MenuItem>
          <MenuItem value="cooljmessy">cooljmessy</MenuItem>
          <MenuItem value="weegembump">weegembump</MenuItem>
         </Select>
        </div>
        <div className={Style.body}>
         <TextField label='comment' value={body}
          onChange={handleChange} margin='none' fullWidth />
        </div>
        <div className={Style.submit}>
         <Button type="submit" variant="contained" size="medium" color="primary" disabled={!(author && body)}> Submit </Button>
        </div>
       </div>
      </form>
     </div>
    )
   }}
  </Mutation>
 );

};

export default AddComment;