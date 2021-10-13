import React from 'react';
import UserListItem from '../user-list-item';

const UserList = ({users}) => {
  return (
    <ul>
      {
        users.map(user => <UserListItem user={user}/>)
      }
    </ul>
  );
}

export default UserList;