import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import UserItem from './UserItem';

const GET_USERS = gql`
{
  topics{
    slug
    description
    article_count
    comment_count
}}`;

const User = () => {
 return (<Query query={GET_USERS} >
  {({ loading, error, data }) => {
   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;
   const { Users } = data;
   return (
    <div>
     <h3>Users, click to see articles on each user </h3>
     <div className="user" >
      {/* {Users.map(User => <UserItem User={User} key={User.slug} />)} */}
     </div>
    </div>
   );
  }}
 </Query>
 )
};

export default User
