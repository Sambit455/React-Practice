import React from 'react'
import { useForm } from 'react-hook-form';


const RHFForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span style={{ color: 'red' }}>Invalid email</span>}
      </div>

      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: true, minLength: 6 })} />
        {errors.password && <span style={{ color: 'red' }}>Min 6 characters</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RHFForm