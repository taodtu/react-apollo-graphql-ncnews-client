import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { GET_TOPICS } from './Topic'

const UPDATE_VOTES = gql`
mutation UpdateArticle ($article_id: ID! $inc_votes: Int! ) {
 updateArticle(article_id: $article_id, inc_votes: $inc_votes){
  article_id
  votes
 }
}`
// const updateVotes = (client, { data: { updateArticle: { article_id } } }) => {
//  const article = client.readQuery({ query: GET_TOPICS }).topics[2].articles.filter(article => article.article_id === article_id)[0];
//  const votes = article.votes + 1;
//  client.writeQuery({
//   query: GET_TOPICS,
//   data: {
//    ...article,
//    votes
//   }
//  })
// }
const ArticleItem = ({ article_id, author, votes, created_at, comment_count }) => {
 return (
  <div className="topic">
   <span style={{ width: '10%' }}>{article_id} </span>
   <span style={{ width: '20%' }}>{author} </span>
   <div style={{ width: '30%' }}>
    <Mutation
     mutation={UPDATE_VOTES}
     variables={{ "article_id": article_id, "inc_votes": 1 }}
    // refetchQueries={[{ query: GET_TOPICS }]}
    // update={updateVotes}
    >
     {(updateArticle, { data, loading, error }) => (
      <div> {data ? data.updateArticle.votes : votes}<button onClick={updateArticle} >
       +</button> </div>)}
    </Mutation>
   </div>
   <span style={{ width: '20%' }}>{created_at} </span>
   <span style={{ width: '20%' }}>{comment_count} </span>
  </div>)

}
export default ArticleItem;