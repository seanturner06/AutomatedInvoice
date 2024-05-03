// PrivateRoute.js
import React, { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

function PrivateRoute({ component: Component, ...rest }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await axios.get('/api/users/current');
                const { isAuthenticated } = response.data;
                setAuthenticated(isAuthenticated !== null);
            } catch (error) {
                console.error('Error checking authentication status:', error);
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // You can show a loading spinner or message while checking authentication
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated ? <Component {...props} /> : <Navigate to="/login" />
            }
        />
    );
}

export default PrivateRoute;
