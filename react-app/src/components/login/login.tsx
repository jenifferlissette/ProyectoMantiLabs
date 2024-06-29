import React, { useState } from 'react';
import './login.css'; // Asumiendo que crearás un archivo CSS separado

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Login attempt', { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="https://media.slid.es/uploads/157932/images/5628206/logo_manticore.png" alt="Manticore" className="logo" />
        <h2>INGRESE SUS CREDENCIALES</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
          <button type="submit" className="login-button">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;