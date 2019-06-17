import gql from 'graphql-tag';
const ARTICLE_FRAGMENT = gql`
 fragment article on Article {
     article_id
     title
     votes
     topic
     author
     created_at
     comment_count
 }
 `
export default ARTICLE_FRAGMENT;