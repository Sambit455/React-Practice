import React from 'react'

const FruitsList = () => {
  const fruits = ['Apple' , 'Banana' , 'Orange'] 

  return (
    <ul>
      {fruits.map( (fruit,index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  )
}

export default FruitsList