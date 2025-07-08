import React from 'react'
import { useState } from 'react'

const SimpleValidationForm = () => {

  const [formData , setFormData] = useState({
    email:'',
    password: ''
  });
  const [errors , setErrors] = useState({});



  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData(prev => ({...prev,[name]:value}));
  };



  const validate = () => {
    const newErrors = {};
    if(!formData.email.includes('@')){
      newErrors.email = 'Email must contain @';
    }if(formData.password.length < 6){
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if(Object.keys(validationErrors).length >0){
      setErrors(validationErrors);
    }else{
      alert('Form Submitted Successfully!');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name='email' value={formData.email} onChange={handleChange}/>
        {errors.email && <p style={{color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name='password' value={formData.password} onChange={handleChange} />
        {errors.password && <p style={{color: 'red' }}>{errors.password}</p>}
      </div>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default SimpleValidationForm