import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';  
import Footer from './Footer';  
import './packages.css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';  

const Packages = () => {
    useEffect(() => {
        AOS.init();  
    }, []);

    const packages = [
        {
            id: 1,
            title: 'Circuit Paris',
            imgSrc: '/paris.png',
            price: 999,
            availableSeats: 15,
            guide: 'John Doe',
            description: 'Explore the wonders of Paris with our exclusive package.',
        },
        {
            id: 2,
            title: 'City Break Londra',
            imgSrc: '/londra.png',
            price: 599,
            availableSeats: 10,
            guide: 'Jane Smith',
            description: 'Enjoy the beautiful London with special discounts.',
        },
        {
            id: 3,
            title: 'City Break Londra',
            imgSrc: '/londra.png',
            price: 599,
            availableSeats: 8,
            guide: 'Mark Lee',
            description: 'Enjoy the beautiful London with special discounts.',
        },
        {
            id: 4,
            title: 'City Break Londra',
            imgSrc: '/londra.png',
            price: 599,
            availableSeats: 5,
            guide: 'Emma White',
            description: 'Enjoy the beautiful London with special discounts.',
        },
    ];

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
                                <img src={pkg.imgSrc} className="card-img-top" alt={pkg.title} />
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
                                            <tr>
                                                <td><strong>Ghid</strong></td>
                                                <td>{pkg.guide}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    
                                    <Link to={`/reservationform/${pkg.id}`} className="btn btn-warning">Rezerva</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Packages;
