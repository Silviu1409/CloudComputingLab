import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        navigate('/auth'); // Redirect to login if no token is found
        return;
      }

      try {
        const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}/get-user-by-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          setError('Failed to fetch user data');
        }
      } catch (err) {
        setError('An error occurred while fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.first_name} {user.last_name}</h5>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Phone Number:</strong> {user.phone_number || 'N/A'}</p>
          <p className="card-text"><strong>Role:</strong> {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
