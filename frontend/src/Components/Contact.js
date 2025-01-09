import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Contact.css'; 
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function Contact() {
  return (
    <div className='page-container'>
       <Navbar />
      <h2>Contact</h2>
      <p>Pagina de contact va fi aici.</p>
      <Footer />
    </div>
  );
}

export default Contact;
