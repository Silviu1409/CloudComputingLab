import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
// import './Register.css';

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setIsLoading(false);
      return;
    }
  
    const registerUrl = `${process.env.REACT_APP_USER_SERVICE_URL}/register`;
  
    try {
      const response = await fetch(registerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber || "",
          role,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
  
        localStorage.setItem("authToken", data.token);
  
        console.log("Registration and login successful:", data);
  
        window.location.href = "/";
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Error creating account");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='page-container d-flex flex-column min-vh-100'>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center flex-grow-1 my-5">
        <div className="card shadow p-4" style={{ maxWidth: '550px', width: '100%' }}>
          <div className="card-body text-center">
            <div className="icon mb-3">
              <img
                src="/logo.png"
                alt="Agency Logo"
                style={{ width: '70px', height: '70px' }}
              />
            </div>
            <h2 className="mb-4">Înregistrează-te</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  placeholder="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number <span className="text-muted">(Optional)</span></label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  autoComplete="tel"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="role" className="form-label">Role <span className="text-danger">*</span></label>
                <select
                  id="role"
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="guide">Guide</option>
                </select>
              </div>
              <div className="form-group mb-3 position-relative">
                <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
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
              <div className="form-group mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                <input
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
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
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? '🙈' : '👁️'}
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ background: 'linear-gradient(to right,rgb(207, 207, 207),rgb(29, 29, 29))' }}
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'REGISTER'}
              </button>
            </form>
            {error && <p className="mt-3 text-danger">{error}</p>}
            <p className="mt-3">Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
