// components/LoginForm.js

import { useState } from 'react';
import { authenticateUser } from '../auth'; // Import the authentication module

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = await authenticateUser(username, password);

    if (user) {
      // Successful login, redirect or set authentication state
      console.log('Login successful');
    } else {
      // Authentication failed, display an error message
      console.error('Invalid username or password');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
