import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function AdminReservations() {
  // Exemplu de date rezervări
  const reservations = [
    {
      id: 1,
      dateTime: '2025-01-10 14:30',
      packageTitle: 'Vacanță în Bali',
      amountPaid: 3000,
      persons: 2,
      username: 'john_doe',
      email: 'john.doe@example.com',
      phone: '0744728811',
    },
    {
      id: 2,
      dateTime: '2025-01-11 09:00',
      packageTitle: 'Circuit Europa',
      amountPaid: 2500,
      persons: 1,
      username: 'jane_doe',
      email: 'jane.doe@example.com',
      phone: '0755261822',
    },
    {
      id: 3,
      dateTime: '2025-01-12 18:45',
      packageTitle: 'Safari în Kenya',
      amountPaid: 4500,
      persons: 3,
      username: 'alex_smith',
      email: 'alex.smith@example.com',
      phone: '0722918291',
    },
  ];

  const handleDeleteReservation = (reservationId) => {
    // Logica pentru ștergerea unei rezervări (exemplu)
    console.log(`Șters rezervarea cu ID-ul: ${reservationId}`);
  };

  return (
    <div className="page-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 my-5">
        <h1 className="text-center mb-4">Administrează Rezervările</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Data și Ora</th>
                <th>Titlu Pachet</th>
                <th>Suma Achitată (€)</th>
                <th>Număr Persoane</th>
                <th>Username</th>
                <th>Email</th>
                <th>Telefon</th>
                <th>Acțiuni</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.dateTime}</td>
                  <td>{reservation.packageTitle}</td>
                  <td>{reservation.amountPaid}</td>
                  <td>{reservation.persons}</td>
                  <td>{reservation.username}</td>
                  <td>{reservation.email}</td>
                  <td>{reservation.phone}</td>
                  <td className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteReservation(reservation.id)}
                    >
                      Șterge Rezervare
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

export default AdminReservations;
