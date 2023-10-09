// components/RegistrationForm.js

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
      // Check if the username already exists in the JSON data
      const userExists = usersData.some((u) => u.username === username);
  
      if (userExists) {
        console.error('Username already exists');
      } else {
        // Add the new user to the JSON data
        usersData.push({ username, password });
  
        // Save the updated JSON data (you may need to use a server or file system for this)
        console.log('User registered successfully');
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
        <button onClick={handleRegister}>Register</button>
      </div>
    );
  };
  