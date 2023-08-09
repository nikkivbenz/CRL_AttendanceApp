import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = (e) => {
      e.preventDefault();
      // Handle sign in logic here
    };
  
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSignIn}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Sign In</button>
        </form>
        <div className="button-container">
          <div>
            <Link to="/CreateAccount" className="button">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default Login;
