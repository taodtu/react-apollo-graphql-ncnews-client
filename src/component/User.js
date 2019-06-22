import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import UserItem from './UserItem';

const GET_USERS = gql`
{
  users{
    username
    name
    article_count
    comment_count
}}`;

const User = () => {
 return (<Query query={GET_USERS} >
  {({ loading, error, data }) => {
   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;
   const { users } = data;
   return (
    <div>
     <h3>Users, click to see articles on each user </h3>
     <div className="user" >
      {users.map(user => <UserItem user={user} key={user.username} />)}
     </div>
    </div>
   );
  }}
 </Query>
 )
};

export default User
