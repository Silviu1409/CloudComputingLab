import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="page-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 my-5">
        <div className="text-center mb-5">
          <h1 className="animated-title text-uppercase fw-bold">
            Admin Dashboard
          </h1>
        </div>

        <div className="row justify-content-center">
          {/* Users Card */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title fw-bold">Users</h5>
                <p className="card-text">Manage all user accounts and their details.</p>
                <a href="/admin/users" className="btn btn-warning">
                  Manage Users
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title fw-bold">Packages</h5>
                <p className="card-text">Add, edit, or delete available packages.</p>
                <a href="/admin/packages" className="btn btn-warning">
                  Manage Packages
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title fw-bold">Reservations</h5>
                <p className="card-text">View and manage all reservations.</p>
                <a href="/admin/reservations" className="btn btn-warning">
                  Manage Reservations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
