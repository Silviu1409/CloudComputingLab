import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';  // Importăm Navbar
import Footer from './Footer';  // Importăm Footer
import './packages.css'; // Fișierul de stiluri personalizate pentru animații
import AOS from 'aos'; // Importăm AOS pentru animații
import 'aos/dist/aos.css'; // Importăm stilurile AOS

const Packages = () => {
    useEffect(() => {
        AOS.init();  // Inițializăm AOS pentru animații
    }, []);

    return (
        <div>
            <Navbar />

            <div id="packages" className="container my-5">
                {/* Titlu animat */}
                <h2 className="text-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                    CELE MAI BUNE PACHETE TURISTICE
                </h2>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card package-card">
                            <img src="/paris.png" className="card-img-top" alt="Offer 1" />
                            <div className="card-body">
                                <h5 className="card-title">Circuit Paris</h5>
                                <p className="card-text">Explore the wonders of Paris with our exclusive package.</p>
                                <button className="btn btn-warning">Rezerva</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card package-card">
                            <img src="/londra.png" className="card-img-top" alt="Offer 2" />
                            <div className="card-body">
                                <h5 className="card-title">City Break Londra</h5>
                                <p className="card-text">Enjoy the beautiful London with special discounts.</p>
                                <button className="btn btn-warning">Rezerva</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card package-card">
                            <img src="/londra.png" className="card-img-top" alt="Offer 2" />
                            <div className="card-body">
                                <h5 className="card-title">City Break Londra</h5>
                                <p className="card-text">Enjoy the beautiful London with special discounts.</p>
                                <button className="btn btn-warning">Rezerva</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card package-card">
                            <img src="/londra.png" className="card-img-top" alt="Offer 2" />
                            <div className="card-body">
                                <h5 className="card-title">City Break Londra</h5>
                                <p className="card-text">Enjoy the beautiful London with special discounts.</p>
                                <button className="btn btn-warning">Rezerva</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Packages;
