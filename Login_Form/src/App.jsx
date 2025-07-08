import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    alert(`Login Successful!\nEmail: ${data.email}\nPassword: ${data.password}\nRemember Me: ${data.remember ? "Yes" : "No"}`);
  };

  return (
    <div>
      <div className="container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password:</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Minimum 6 characters',
                  },
                })}
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          {/* Remember Me */}
          <div className="form-group checkbox">
            <label>
              <input type="checkbox" {...register('remember')} />
              Remember Me
            </label>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
