import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
// import './Register.css';

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className='page-container d-flex flex-column min-vh-100'>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center flex-grow-1 my-5">
        <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="card-body text-center">
            
            <div className="icon mb-3">
              <img
                src="/logo.png"
                alt="Agency Logo"
                style={{ width: '70px', height: '70px' }}
              />
            </div>
            <h2 className="mb-4">Înregistrează-te</h2>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="form-group mb-3 position-relative">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type={passwordVisible ? 'text' : 'password'} 
                  id="password" 
                  className="form-control" 
                  placeholder="Password" 
                  required 
                />
                <span 
                  className="position-absolute" 
                  style={{ right: '10px', top: 'calc(50% + 15px)', transform: 'translateY(-50%)', cursor: 'pointer', lineHeight: '1', fontSize: '1.2rem' }} 
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? '🙈' : '👁️'}
                </span>
              </div>
              <div className="form-group mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input 
                  type={confirmPasswordVisible ? 'text' : 'password'} 
                  id="confirmPassword" 
                  className="form-control" 
                  placeholder="Confirm Password" 
                  required 
                />
                <span 
                  className="position-absolute" 
                  style={{ right: '10px', top: 'calc(50% + 15px)', transform: 'translateY(-50%)', cursor: 'pointer', lineHeight: '1', fontSize: '1.2rem' }} 
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? '🙈' : '👁️'}
                </span>
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{ background: 'linear-gradient(to right,rgb(207, 207, 207),rgb(29, 29, 29))' }}>REGISTER</button>
            </form>
            <p className="mt-3">Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
