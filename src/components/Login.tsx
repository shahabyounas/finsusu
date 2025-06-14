import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
    // Navigate to dashboard after successful login
    navigate('/dashboard');
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Sign up clicked');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          <span className="gradient-text">FinSUSU</span>
        </h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="sign-in-button" onClick={handleSubmit}>
              Sign In
            </button>
            <button type="button" className="sign-up-button" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 