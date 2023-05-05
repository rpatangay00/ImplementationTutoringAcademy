import React, { useState } from 'react';
import './Login2.css';

function Login2Page() {
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

    
    setSuccess(true);
    window.location.reload();

  };

  return (
    <div className="LoginPage">
      <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
      {success ? (
        <div>
          <h1>Login successful!</h1>
          <p>Email: {email}</p>
        </div>
      ) : (
        <div>
          <h1 className='text-gray-200'>Login</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label className='text-gray-200'>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className='text-gray-200'>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
          </form>
          &nbsp;&nbsp;&nbsp;&nbsp;<a href="/forgot" className='text-gray-200'>Forgot Email/Password?</a>
        </div>
      )}
    </div>
  );
}

export default Login2Page;
