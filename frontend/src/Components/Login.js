import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
// import './Login.css';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Get the base URL from the environment variable and append the login endpoint
    const loginUrl = `${process.env.REACT_APP_USER_SERVICE_URL}/login`;

    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
  
        console.log('Login successful:', data);
  
        // Store the token in localStorage
        localStorage.setItem('authToken', data.token);
  
        // Redirect to the home page
        window.location.href = '/';
      } else {
        // If the request fails, set an error message
        const errorData = await response.json();
        setError(errorData.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='page-container d-flex flex-column min-vh-100'>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center flex-grow-1 my-5">
        <div className="card shadow p-4" style={{ maxWidth: '450px', width: '100%' }}>
          <div className="card-body text-center">
            <div className="icon mb-3">
              <img
                src="/logo.png"
                alt="Agency Logo"
                style={{ width: '70px', height: '70px' }}
              />
            </div>
            <h2 className="mb-4">Conecteaza-te</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div className="form-group mb-3 position-relative">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <span
                  className="position-absolute"
                  style={{
                    right: '10px',
                    top: 'calc(50% + 15px)',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    lineHeight: '1',
                    fontSize: '1.2rem'
                  }}
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? '🙈' : '👁️'}
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ background: 'linear-gradient(to right,rgb(207, 207, 207),rgb(29, 29, 29))' }}
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'LOGIN'}
              </button>
            </form>
            {error && <p className="mt-3 text-danger">{error}</p>}
            <p className="mt-3">Don’t have an account? <a href="/register">Sign Up</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
