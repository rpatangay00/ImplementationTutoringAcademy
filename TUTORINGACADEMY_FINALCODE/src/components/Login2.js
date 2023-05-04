import React, { useState } from 'react';
import './Login2.css';

function Login2() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password) || !/[A-Z]/.test(password)) {
      setError("Password must be at least 8 characters long, contain a number, a symbol and a capital letter");
      return;
    }

    // TODO: Send login request to server
    setSuccess(true);
    window.location.reload(); // Refresh page after successful login

  };

  return (
    <div className="LoginPage">
      {success ? (
        <div>
          <h1>Login successful!</h1>
          <p>Email: {email}</p>
        </div>
      ) : (
        <div>
          <h1>Tutoring Academy Student Login</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
          </form>
          <a href="/forgot">Forgot Email/Password?</a>
        </div>
      )}
    </div>
  );
}

export default Login2;
