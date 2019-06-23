import gql from 'graphql-tag';

export const ADD_COMMENT = gql`
mutation ($username:String! $id:ID! $comment:String!) {
  createComment (username:$username article_id:$id body:$comment) {
    comment_id
    article_id
    author
    body
    created_at
    votes
  }
}
`
export const DELETE_COMMENT = gql`
mutation ($id:ID!) {
  deleteComment (comment_id:$id) 
}
`
export const VOTE_COMMENT = gql`
mutation UpdateArticle ($id:ID! $votes:Int!) {
  updateArticle(article_id:$id, inc_votes:$votes){
    article_id
    votes   
  }
}
`