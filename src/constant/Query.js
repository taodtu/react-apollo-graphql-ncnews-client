import gql from 'graphql-tag';

export const GET_TOPICS = gql`
{
  topics{
    slug
    description
    article_count
    comment_count
}}`;

export const GET_ARTICLES_TOPIC = gql`
query($slug: String!$offset:Int $limit:Int)
  {articlesByTopic (topic:$slug offset:$offset limit:$limit) {
    article_id
    title,
    votes,
    created_at,
    comment_count,
}}`;

export const GET_USERS = gql`
{
  users{
    username
    name
    article_count
    comment_count
}}`;
export const GET_ARTICLES_USER = gql`
query($username: String! $offset:Int $limit:Int)
  {articlesByAuthor (username:$username offset:$offset limit:$limit) {
    article_id
    title,
    votes,
    created_at,
    comment_count,
}}`;

export const GET_ARTICLE = gql`
query($id: ID!)
  {getArticle(article_id:$id ) {
    article_id,
    title,
    body,
    author,
    topic,
    votes,
    created_at,
    comment_count,
    comments{
      comment_id
      article_id
      author
      body
      votes
      created_at
    }
}}`;

