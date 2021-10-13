import React from 'react';

const UserListItem = ({ user }) => {
  return (
    <li>
      <p>{user.name}</p>
      <p>{user.color}</p>
    </li>
  );
}

export default UserListItem;