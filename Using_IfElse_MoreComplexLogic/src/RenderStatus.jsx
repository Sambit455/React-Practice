import React from 'react'

const RenderStatus = ({ status }) => {
  if(status === 'loading') return <p>Loading...</p>
  else if(status === 'success') return <p>Data Loaded!!</p>
  else return <p>Something Went Wrong!!!</p>
}

export default RenderStatus