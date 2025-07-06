import React from 'react'

const LoginControl = ({isLoggedIn}) => {
  let button;
  if(isLoggedIn){
    button = <button>Logout</button>
  }else{
    button = <button>Login</button>
  }

  return (
    <div>
      {button}
    </div>
  )
}

export default LoginControl