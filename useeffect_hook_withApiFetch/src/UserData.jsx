import React, { useEffect, useState } from 'react'

const UserData = () => {
  const [user , setUser] = useState(null);

  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  return (
    <div>
      {user ? <h3>{user.name}</h3> : <p>Loading...</p>}
    </div>
  )
}

export default UserData