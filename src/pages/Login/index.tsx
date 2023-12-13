import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles.css";
import { useState } from 'react';

export default function LoginPage({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ login: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedAccount = JSON.parse(localStorage.getItem('account')); // Retrieve account from local storage
    console.log(credentials.login);
    if (storedAccount && credentials.login === storedAccount.login && credentials.password === storedAccount.password) {
      onLoginSuccess(true);
      navigate('/dashboard'); // Navigate to dashboard or another page upon successful login
    } else {
      alert('Invalid login or password');
      onLoginSuccess(false);
    }
  };

  const handleInputChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input type="login" id="login" name="login" placeholder="Login" onChange={handleInputChange}  value={credentials.login} required />
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">Password</label> */}
          <input type="password" id="password" name="password" placeholder="Senha" onChange={handleInputChange}  value={credentials.password}required />
        </div>

        <button type="submit" >Entrar</button>
      </form>

      
      <Link to="/signup" className="signup-link">Criar conta</Link>
      
    </div>
  );
}
