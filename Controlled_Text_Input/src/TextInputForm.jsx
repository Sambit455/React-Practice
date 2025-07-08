import React, {useState} from 'react'

const TextInputForm = () => {
  const [name , setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default TextInputForm