import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Loader2 } from 'lucide-react';
import './Auth.css';

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError('');

    // Mock authentication delay
    setTimeout(() => {
      if (username && password) {
        onLogin(username);
      } else {
        setError('Please enter both username and password.');
        setIsLoggingIn(false);
      }
    }, 1000);
  };

  return (
    <div className="auth-page">
      <motion.div 
        className="auth-card glass-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-header">
          <h1>EDU <span className="gradient-text">Predictor</span></h1>
          <p>Sign in to your account</p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          {error && <div style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center' }}>{error}</div>}
          <div className="auth-input-group">
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Enter your username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="auth-input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-login grad-bg" disabled={isLoggingIn}>
            {isLoggingIn ? (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                  <Loader2 size={18} />
                </motion.div>
                Signing In...
              </>
            ) : (
              <>
                <LogIn size={18} /> Sign In
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Auth;
