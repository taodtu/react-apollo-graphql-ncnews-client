import React, { Component } from 'react';
import { ADD_COMMENT } from '../../constant/Mutation';
import { Mutation } from 'react-apollo';
import { GET_ARTICLE } from '../../constant/Query';
import { Button, TextField } from '@material-ui/core';
import Style from './AddComment.module.css';

const INITIAL_STATE = {
 author: '',
 body: ''
}

class AddComment extends Component {
 state = {
  ...INITIAL_STATE
 };
 onChange = ({ target }) => {
  const { name, value } = target;
  this.setState({
   ...this.state,
   [name]: value
  })
 }
 handleSubmit = (e, createComment) => {
  const { author, body } = this.state;
  const { id } = this.props;
  e.preventDefault();
  createComment({ variables: { username: author, id, comment: body } });
  this.setState({ ...INITIAL_STATE })
 }
 render() {
  const { author, body } = this.state;
  const { id } = this.props;
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
     const newComments = [...comments, createComment]
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
       <form onSubmit={(e) => this.handleSubmit(e, createComment)} >
        <div className={Style.form}>
         <div className={Style.username}>
          <TextField name='author' label='username' value={author} onChange={this.onChange} margin='none' />
         </div>
         <div className={Style.body}>
          <TextField name='body' label='comment' value={body} onChange={this.onChange} margin='none' fullWidth />
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
 }
};

export default AddComment;