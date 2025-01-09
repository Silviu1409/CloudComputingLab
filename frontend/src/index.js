import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './Components/Auth';
import Contact from './Components/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.title = "Prestige Travels";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/auth" element={<Auth/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/offers" element={<App scrollTo="offers" />} />

      </Routes>
    </Router>
);


reportWebVitals();
