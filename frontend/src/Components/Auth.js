import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import './Auth.css';

function Auth() {
  return (
    <div className='page-container d-flex flex-column min-vh-100'> 
      {/* css-ul pt page container este in index.css */}
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center flex-grow-1">
        <div className="row">
          <div className="col-md-6 mb-4 d-flex justify-content-center">
            <div className="card text-center shadow custom-card" style={{ width: '100%' }}>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">Login</h5>
                <p className="card-text">Conecteaza-te la contul tău din platforma</p>
                <Link to="/login" className="btn btn-warning mt-auto mx-auto" style={{ width: 'auto' }}>Conecteaza-te</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 d-flex justify-content-center">
            <div className="card text-center shadow custom-card" style={{ width: '100%' }}>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">Register</h5>
                <p className="card-text">Creează un cont nou pentru a accesa platforma.</p>
                <Link to="/register" className="btn btn-dark mt-auto mx-auto" style={{ width: 'auto' }}>Creeaza cont</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Auth;
