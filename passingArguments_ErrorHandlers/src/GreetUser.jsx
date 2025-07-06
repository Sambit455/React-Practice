import React from 'react'

const GreetUser = () => {
  const handleUser = (name) => {
    alert(`Hello! ${name}`);
  }
  return (
    <div>
      <button onClick={ () => {handleUser('Sambit')}}>Greet</button>
    </div>
  )
}

export default GreetUser
 