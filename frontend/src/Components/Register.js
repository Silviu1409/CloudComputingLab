import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css'; 
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function Register() {
  return (
    <div className='page-container'>
       <Navbar />
      <h2>Register</h2>
      <p>Pagina de register va fi aici.</p>
      <Footer />
    </div>
  );
}

export default Register;
