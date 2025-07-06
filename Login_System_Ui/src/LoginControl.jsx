import React, { useState } from 'react';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{isLoggedIn ? 'Welcome, User!' : 'Please log in.'}</h1>

      {isLoggedIn && <p>You have 3 notifications.</p>}

      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default LoginControl;
