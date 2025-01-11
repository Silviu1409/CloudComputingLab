import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Login.css'; 
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function Login() {
  return (
    <div className='page-container'>
       <Navbar />
      <h2>Login</h2>
      <p>Pagina de login va fi aici.</p>
      <Footer />
    </div>
  );
}

export default Login;
