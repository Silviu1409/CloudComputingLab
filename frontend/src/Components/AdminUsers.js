import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom';

function AdminUsers() {

  // Exemplu de date utilizatori pentru a testa inainte de a avea baza
  const users = [
    { id: 1, username: 'john_doe', email: 'john.doe@example.com' },
    { id: 2, username: 'jane_doe', email: 'jane.doe@example.com' },
    { id: 3, username: 'alex_smith', email: 'alex.smith@example.com' },
  ];

  const navigate = useNavigate(); 

  const handleViewReservations = (userId) => {
    navigate(`/admin/adminusers/${userId}/reservations`);
  };

  return (
    <div className="page-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 my-5">
        <h1 className="text-center mb-4">Manage Users</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-warning"
                      onClick={() => handleViewReservations(user.id)}
                    >
                      Vezi Rezervări
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminUsers;
