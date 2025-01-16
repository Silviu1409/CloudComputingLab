import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './Components/Auth';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AdminDashboard from './Components/AdminDashboard';
import AdminUsers from './Components/AdminUsers';
import AdminPackages from './Components/AdminPackages';
import AdminReservations from './Components/AdminReservations';
import Packages from './Components/Packages';
import ReservationForm from './Components/ReservationForm';

document.title = "Prestige Travels";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/auth" element={<Auth/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/packages" element={<Packages/>} />
         <Route path="/admindashboard" element={<AdminDashboard/>} />
         <Route path="/adminusers" element={<AdminUsers/>} />
         <Route path="/adminpackages" element={<AdminPackages/>} />
         <Route path="/adminreservations" element={<AdminReservations/>} />
         <Route path="/reservationform/:id" element={<ReservationForm />} />

      </Routes>
    </Router>
);


reportWebVitals();
