import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Auth.css'; 
import Navbar from './Navbar.js';
import Footer from './Footer.js';


function Auth() {
  return (
    <div className='page-container'> 
    {/* css-ul pt page container este in index.css */}
       <Navbar />
      <h2>Autentificare</h2>
      <p>Pagina de autentificare va fi aici.</p>

      <Footer />
    </div>
  );
}

export default Auth;
