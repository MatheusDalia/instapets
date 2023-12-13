import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import "./styles.css";

export default function SignupPage() {
  const [account, setAccount] = useState({ login: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('account', JSON.stringify(account)); // Storing account info in local storage
    console.log('Stored Account:', localStorage.getItem('account'));
    navigate('/login'); // Redirect to login page after signup
  };

  const handleInputChange = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-container">
      <h2>Criar conta</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            id="login" 
            name="login" 
            placeholder="Login" 
            required 
            onChange={handleInputChange} 
            value={account.login} 
          />
        </div>

        <div className="form-group">
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Senha" 
            required 
            onChange={handleInputChange} 
            value={account.password} 
          />
        </div>

        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
