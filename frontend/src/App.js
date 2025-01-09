import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img 
                            src="/logo.png" 
                            alt="Agency Logo" 
                            style={{ width: '70px', height: '70px' }} 
                        />
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <a className="nav-link" href="#app">Home</a>
                            </li>
                            <li className="nav-item">
                                 <a className="nav-link" href="#offers">Oferte</a>
                                
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#login">Autentificare</a>
                                
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" data-bs-pause="false">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="/image1.png" className="d-block w-100" alt="Carousel 1" />
            <div className="carousel-caption d-none d-md-block">
                <h5>Discover Beautiful Destinations</h5>
                <p>Your dream vacation awaits.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src="/image2.png" className="d-block w-100" alt="Carousel 2" />
            <div className="carousel-caption d-none d-md-block">
                <h5>Adventure Awaits</h5>
                <p>Explore the unexplored.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src="/image3.png" className="d-block w-100" alt="Carousel 3" />
            <div className="carousel-caption d-none d-md-block">
                <h5>Luxury Redefined</h5>
                <p>Experience the best vacations.</p>
            </div>
        </div>
    </div>
</div>



<div id="offers" className="container my-5">
    <h2 className="text-center mb-4">CELE MAI BUNE OFERTE</h2>
    <div className="row">
        <div className="col-md-6 mb-4">
            <div className="card">
                <img src="/paris.png" className="card-img-top" alt="Offer 1" />
                <div className="card-body">
                    <h5 className="card-title">Circuit Paris</h5>
                    <p className="card-text">Explore the wonders of Paris with our exclusive package.</p>
                    <button className="btn btn-warning">Rezerva</button>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="card">
                <img src="/londra.png" className="card-img-top" alt="Offer 2" />
                <div className="card-body">
                    <h5 className="card-title">City Break Londra</h5>
                    <p className="card-text">Enjoy the beautiful London with special discounts.</p>
                    <button className="btn btn-warning">Rezerva</button>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="card">
                <img src="/paris.png" className="card-img-top" alt="Offer 1" />
                <div className="card-body">
                    <h5 className="card-title">Circuit Paris</h5>
                    <p className="card-text">Explore the wonders of Paris with our exclusive package.</p>
                    <button className="btn btn-warning">Rezerva</button>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="card">
                <img src="/paris.png" className="card-img-top" alt="Offer 1" />
                <div className="card-body">
                    <h5 className="card-title">Circuit Paris</h5>
                    <p className="card-text">Explore the wonders of Paris with our exclusive package.</p>
                    <button className="btn btn-warning">Rezerva</button>
                </div>
            </div>
        </div>
    </div>
</div>


{/* Footer */}
          <footer className="bg-dark text-white text-center py-3">
                <p>Proiect Cloud Computing </p>
                <p>
                    <p className="text-white">Baze de date si tehnologii software | UniBuc-FMI</p> 
                    <p className="text-white"> Avian Silviu & Dijmarescu Cristina</p>
                </p>
            </footer>

        </div>
    );
}

export default App;
