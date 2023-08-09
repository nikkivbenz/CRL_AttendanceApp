import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Handle create account logic here
  };

  return (
    <div className="create-account">
      <h1>Create Account</h1>
      <form onSubmit={handleCreateAccount}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="email" placeholder="Confirm Email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
