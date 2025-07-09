import React from 'react'

const DislikeBtn = ({dislikes,onDislike}) => {
  return (
    <div>
      <button onClick={onDislike}>👎 Dislike</button>.
      <p>DisLike: {dislikes}</p>
    </div>
  )
}

export default DislikeBtn