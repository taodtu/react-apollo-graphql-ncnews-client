import React from 'react';
import { GET_USERS } from '../../constant/Query'
import { Query } from 'react-apollo';
import UserItem from './UserItem';
import Loader from 'react-loader-spinner';

const User = () => {
  return (<Query query={GET_USERS} >
    {({ loading, error, data, client }) => {
      if (loading) return <Loader
        type="Puff"
        color="#00BFFF"
        height="100"
        width="100"
      />;
      if (error) return `Error! ${error.message}`;
      const { users } = data;
      return (
        <div>
          <h3>Users, click to see articles on each user </h3>
          <div className="user" >
            {users.map(user => <UserItem user={user} key={user.username} client={client} />)}
          </div>
        </div>
      );
    }}
  </Query>
  )
};

export default User
