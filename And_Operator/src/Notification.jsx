import React from 'react'

const Notification = ({ hashMessage }) => {
  return (
    <div>
      <h1>Inbox</h1>
      { hashMessage && <p>You have One New Message...</p>}
    </div>
  )
}

export default Notification