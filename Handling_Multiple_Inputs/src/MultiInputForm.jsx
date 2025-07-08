import React , { useState } from 'react'

const MultiInputForm = () => {
  const [formData , setFormData] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData( prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label >
        Email:
        <input type="email" name='email' value={formData.email} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Password:
        <input type="password" name='password' value={formData.password} onChange={handleChange} />
      </label>
      <br/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default MultiInputForm