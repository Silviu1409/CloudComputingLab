import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';  
import Footer from './Footer';  
import './packages.css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';  
import axios from 'axios';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [packagesPerPage, setPackagesPerPage] = useState(5);
  const [totalPackages, setTotalPackages] = useState(0);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PACKAGE_MANAGEMENT_SERVICE_URL}/api/packages/extended-details`, {
          params: {
            _page: currentPage,
            _limit: packagesPerPage,
          },
        });
        setPackages(response.data);
        setTotalPackages(parseInt(response.headers['x-total-count'], 10));
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    AOS.init();
    fetchPackages();
  }, [currentPage, packagesPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePackagesPerPageChange = (e) => {
    setPackagesPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalPackages / packagesPerPage);

  return (
    <div>
      <Navbar />
  
      <div id="packages" className="container my-5">
        <h2 className="text-center mb-4" data-aos="fade-up" data-aos-duration="1000">
          CELE MAI BUNE PACHETE TURISTICE
        </h2>
  
        <div className="row">
          {packages.map((pkg) => (
            <div className="col-md-6 mb-4" key={pkg.id}>
              <div className="card package-card">
                <img src={pkg.imgSrc || '/default.png'} className="card-img-top" alt={pkg.title} />
                <div className="card-body">
                  <h5 className="card-title">{pkg.title}</h5>
                  <p className="card-text">{pkg.description}</p>
  
                  {/* Tabel pentru detalii */}
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <td><strong>Preț</strong></td>
                        <td>{pkg.price}€</td>
                      </tr>
                      <tr>
                        <td><strong>Locuri disponibile</strong></td>
                        <td>{pkg.availableSeats}</td>
                      </tr>
                      {pkg.guide ? (
                        <>
                          <tr>
                            <td><strong>Ghid</strong></td>
                            <td>{pkg.guide.name}</td>
                          </tr>
                          {pkg.guide.language && (
                            <tr>
                              <td><strong>Limba cunoscută</strong></td>
                              <td>{pkg.guide.language}</td>
                            </tr>
                          )}
                        </>
                      ) : (
                        <tr>
                          <td colSpan="2"><strong>Ghid</strong> - Nu există ghid disponibil</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
  
                  <Link to={`/reservationform/${pkg.id}`} className="btn btn-warning">Rezerva</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="pagination-container">
          <label htmlFor="packages-per-page">Pachete pe pagina:</label>
          <select
            id="packages-per-page"
            value={packagesPerPage}
            onChange={handlePackagesPerPageChange}
            className="ml-2"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
  
          <nav className="mt-4">
            {totalPackages > 0 && (
              <ul className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className="page-link"
                      disabled={currentPage === index + 1}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
      </div>
  
      <Footer />
    </div>
  );
};

export default Packages;
