import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';  
import Footer from './Footer'; 
const ReservationForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [packageData, setPackageData] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        numOfPeople: 1,
        totalCost: 0,
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const packages = [
            { id: 1, title: 'Circuit Paris', price: 999, availableSeats: 15 },
            { id: 2, title: 'City Break Londra', price: 599, availableSeats: 10 },
            { id: 3, title: 'City Break Londra', price: 599, availableSeats: 8 },
            { id: 4, title: 'City Break Londra', price: 599, availableSeats: 5 },
        ];

        const selectedPackage = packages.find(pkg => pkg.id === parseInt(id));
        if (selectedPackage) {
            setPackageData(selectedPackage);
            setFormData((prev) => ({
                ...prev,
                numOfPeople: 1,
                totalCost: selectedPackage.price,
            }));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'numOfPeople' && value > packageData.availableSeats) {
            setErrorMessage('Numărul de persoane nu poate depăși locurile disponibile!');
        } else {
            setErrorMessage('');
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
            totalCost: name === 'numOfPeople' ? value * packageData.price : prev.totalCost,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errorMessage) {
            alert(errorMessage);
            return;
        }
        alert('Rezervare confirmată!');
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/packages');
    };

    if (!packageData) return <div>Loading...</div>;

    return (
        <div>
        <Navbar />
        <div className="container my-5">

            <h2 className="text-center mb-4">Formular de Rezervare pentru {packageData.title}</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Nume</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Prenume</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Telefon</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="numOfPeople" className="form-label">Număr de persoane</label>
                    <input
                        type="number"
                        className="form-control"
                        id="numOfPeople"
                        name="numOfPeople"
                        value={formData.numOfPeople}
                        onChange={handleChange}
                        min="1"
                        max={packageData.availableSeats}
                        required
                    />
                    {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
                    <div className="mt-2">
                        <strong>Numărul de locuri disponibile: {packageData.availableSeats}</strong>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="totalCost" className="form-label">Cost Total</label>
                    <input
                        type="text"
                        className="form-control"
                        id="totalCost"
                        value={`${formData.totalCost}€`}
                        disabled
                    />
                </div>

                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger" onClick={handleCancel}>Anulează</button>
                    <button type="submit" className="btn btn-success">Confirmă Rezervarea</button>
                </div>
            </form>
        </div>
        <Footer />
        </div>
    );
};

export default ReservationForm;
