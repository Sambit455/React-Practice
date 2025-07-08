import React , { useState} from 'react'

const TextAreaExample = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  return (
    <div>
      <label>Message:</label>
      <textarea value={message} onChange={handleChange} />
      <p>Your message: {message}</p>
    </div>
  );
}

export default TextAreaExample