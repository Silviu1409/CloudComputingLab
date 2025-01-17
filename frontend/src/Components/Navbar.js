import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    // Check if the user is logged in and set the state
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            const fetchUserInfo = async () => {
                try {
                    const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}/get-user-by-token`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });

                    if (response.ok) {
                        const user = await response.json();
                        setUserInfo(user);
                        setIsLoggedIn(true);

                        localStorage.setItem('userRole', user.role); // Save the user role to localStorage
                    } else {
                        setIsLoggedIn(false);
                    }
                } catch (err) {
                    console.error('Error fetching user info:', err);
                    setIsLoggedIn(false);
                }
            };
            fetchUserInfo();
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        // Clear token and role from localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole');
        setIsLoggedIn(false);
        setUserInfo(null);
        navigate('/auth'); // Redirect to the login page after logout
    };

    const userRole = localStorage.getItem('userRole'); // Get user role from localStorage

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="nav-link" to="/">
                    <span className="navbar-brand">
                        <img
                            src="/logo.png"
                            alt="Agency Logo"
                            style={{ width: '70px', height: '70px' }}
                        />
                    </span>
                </NavLink>

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
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/packages">Pachete</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        {/* Conditional rendering based on user login status */}
                        {!isLoggedIn ? (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/auth">Autentificare</NavLink>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/profile">Profil</NavLink>
                                </li>
                                {userRole === 'admin' && (
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/admindashboard">Admin Dashboard</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/adminusers">Admin Users</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/adminpackages">Admin Packages</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/adminreservations">Admin Reservations</NavLink>
                                        </li>
                                    </>
                                )}
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
