import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function AdminPackages() {
  // Exemplu de date pachete
  const packages = [
    { id: 1, title: 'Vacanță în Bali', description: 'Plaje exotice și peisaje minunate', country: 'Indonezia', price: 3000, availableSlots: 5 },
    { id: 2, title: 'Circuit Europa', description: 'Vizitează capitalele europene', country: 'Europa', price: 2500, availableSlots: 10 },
    { id: 3, title: 'Safari în Kenya', description: 'Aventuri în savană', country: 'Kenya', price: 4500, availableSlots: 3 },
  ];

  // Exemplu de ghizi disponibili
  const guides = [
    { id: 1, name: 'Andrei Popescu' },
    { id: 2, name: 'Maria Ionescu' },
    { id: 3, name: 'Alexandru Vasile' },
  ];

  // Starea pentru ghidul selectat pentru fiecare pachet
  const [assignedGuides, setAssignedGuides] = useState({});

  const handleAssignGuide = (packageId, guideId) => {
    setAssignedGuides((prevState) => ({
      ...prevState,
      [packageId]: guideId,
    }));
  };

  return (
    <div className="page-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 my-5">
        <h1 className="text-center mb-4">Administrează Pachetele</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Titlu</th>
                <th>Descriere</th>
                <th>Țara</th>
                <th>Preț (€)</th>
                <th>Locuri Disponibile</th>
                <th>Ghid</th>
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
                  <td>{pkg.availableSlots}</td>
                  <td>
                    <select
                      className="form-select"
                      value={assignedGuides[pkg.id] || ''}
                      onChange={(e) => handleAssignGuide(pkg.id, e.target.value)}
                    >
                      <option value="">Selectează un ghid</option>
                      {guides.map((guide) => (
                        <option key={guide.id} value={guide.id}>
                          {guide.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="d-flex justify-content-around">
                    <button className="btn btn-primary">Editează Pachet</button>
                    <button className="btn btn-danger">Șterge Pachet</button>
                    <button className="btn btn-warning">Vezi Rezervări</button>
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
