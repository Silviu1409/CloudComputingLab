import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom';

function AdminPackages() {
  // Exemplu de date pachete turistice
  const packages = [
    {
      id: 1,
      title: 'Vacanță în Bali',
      description: 'Relaxare pe plajele exotice ale insulei Bali.',
      country: 'Indonezia',
      price: 1500,
      availableSeats: 10,
    },
    {
      id: 2,
      title: 'Circuit Europa',
      description: 'Explorează marile capitale europene.',
      country: 'Europa',
      price: 2500,
      availableSeats: 20,
    },
    {
      id: 3,
      title: 'Safari în Kenya',
      description: 'Descoperă fauna sălbatică în Kenya.',
      country: 'Kenya',
      price: 3000,
      availableSeats: 5,
    },
  ];

  const navigate = useNavigate(); 

  const handleEditPackage = (packageId) => {
    
    navigate(`/admin/adminpackages/${packageId}/edit`);
  };

  const handleDeletePackage = (packageId) => {
    
    console.log(`Șters pachetul cu ID-ul: ${packageId}`);
  };

  const handleViewReservations = (packageId) => {
    
    navigate(`/admin/adminpackages/${packageId}/reservations`);
  };

  return (
    <div className="page-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 my-5">
        <h1 className="text-center mb-4">Administrează Pachete Turistice</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Titlu</th>
                <th>Descriere</th>
                <th>Țara</th>
                <th>Preț (€)</th>
                <th>Locuri Disponibile</th>
                <th>Acțiuni</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id}>
                  <td>{pkg.title}</td>
                  <td>{pkg.description}</td>
                  <td>{pkg.country}</td>
                  <td>{pkg.price}</td>
                  <td>{pkg.availableSeats}</td>
                  <td className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleEditPackage(pkg.id)}
                    >
                      Editează Pachet
                    </button>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDeletePackage(pkg.id)}
                    >
                      Șterge Pachet
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleViewReservations(pkg.id)}
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

export default AdminPackages;
