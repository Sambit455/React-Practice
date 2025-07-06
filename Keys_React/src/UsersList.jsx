import React from 'react'


const users = [
  { id: 101, name: 'John' },
  { id: 102, name: 'Alice' },
  { id: 103, name: 'Bob' }
];

const UsersList = () => {
  return (
    <ul>
      {users.map( (user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UsersList