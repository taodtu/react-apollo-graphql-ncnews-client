import gql from 'graphql-tag';

export const ADD_COMMENT = gql`
mutation ($username:String! $id:ID! $comment:String!) {
  createComment (username:$username article_id:$id body:$comment) {
    comment_id
    article_id
    author
    body
  }
}
`