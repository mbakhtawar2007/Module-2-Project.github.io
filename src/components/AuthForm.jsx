// AuthForm.js
import React from 'react';

const AuthForm = ({ type, onClose }) => {
  const isSignUp = type === 'signup'; // Determine if it's signup or signin form

  return (
    <div className="auth-form-overlay">
      <div className="auth-form-container">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <form>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm your password" required />
            </div>
          )}
          <button type="submit" className="submit-btn">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
;