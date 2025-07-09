import React from 'react'

const LikeBtn = ({likes,onLike}) => {
  return (
    <div>
      <button onClick={onLike}>👍 Like</button>
      <p>Likes: {likes}</p>
    </div>
  )
}

export default LikeBtn