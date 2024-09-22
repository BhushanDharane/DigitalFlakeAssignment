import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you'd handle the login logic. 
      // You might send an API request to your backend, authenticate, etc.
      console.log('Email:', email);
      console.log('Password:', password);

    };

  return (
    <div className="container">
      <div className="login-form">
        <div className="logo">
          <span>D</span>
          <h1>digitalflake</h1>
        </div>
        <h2>Welcome to Digitalflake admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email-id</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <Link to="/home"> <button type="submit" style={{ backgroundColor: '#5C218B' }}>Log In</button></Link>
          <Link to = "/forgotPassword"><p>Forgot Password?</p></Link>
        </form>
      </div>
    </div>
  )
}

export default User