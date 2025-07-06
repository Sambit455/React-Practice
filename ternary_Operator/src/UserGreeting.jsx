import React from 'react'

const UserGreeting = ({isLoggedIn}) => {
  return (
    <div>
      { isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login...</h1>}
    </div>
  )
}

export default UserGreeting