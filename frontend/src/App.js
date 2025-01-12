import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import { Link } from 'react-router-dom';
import AOS from 'aos';  // Importăm pentru animații
import 'aos/dist/aos.css';  // AOS CSS pentru animații

const App = ({ scrollTo }) => {
    useEffect(() => {
        AOS.init();  // Inițializăm AOS
        if (scrollTo === 'packages') {
            const offersSection = document.getElementById('packages');
            if (offersSection) {
                offersSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [scrollTo]);

    return (
        <div className='page-container'>
            <Navbar />

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

            {/* Descriere Agenție */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Welcome to Prestige Travels</h2>
                <p className="text-center" data-aos="fade-up" data-aos-duration="1000">
                    Discover the most beautiful destinations with Prestige Travels. Our team of experts is ready to guide you to your dream vacation. Whether you want an adventure in the wild or a relaxing holiday in a luxury resort, we have something special for you.
                </p>
            </div>

            {/* Statistici */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Our Achievements</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow" data-aos="fade-right" data-aos-duration="1000">
                            <div className="card-body">
                                <h3>1000+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow" data-aos="fade-up" data-aos-duration="1000">
                            <div className="card-body">
                                <h3>100</h3>
                                <p>Packages Sold</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow" data-aos="fade-left" data-aos-duration="1000">
                            <div className="card-body">
                                <h3>10</h3>
                                <p>Certified Guides</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pachete */}
            <div id="packages" className="container my-5">
                <h2 className="text-center mb-4">CELE MAI BUNE PACHETE TURISTICE</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card shadow" data-aos="flip-left" data-aos-duration="1000">
                            <img src="/paris.png" className="card-img-top" alt="Offer 1" />
                            <div className="card-body">
                                <h5 className="card-title">Circuite Paris</h5>
                                <p className="card-text">Explore the wonders of Paris with our exclusive package.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card shadow" data-aos="flip-left" data-aos-duration="1000">
                            <img src="/londra.png" className="card-img-top" alt="Offer 2" />
                            <div className="card-body">
                                <h5 className="card-title">City Breaks in Londra</h5>
                                <p className="card-text">Enjoy the beautiful London with special discounts.</p>
                                
                            </div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default App;
