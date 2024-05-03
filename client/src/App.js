import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import LoginPage from './Login';
import HomePage from './Home';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Corrected Route for LoginPage */}
        <Route path="/login" element={<LoginPage />} />

        {/* Presumed correct usage of PrivateRoute wrapping HomePage */}
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />

        {/* Corrected usage of Navigate to redirect from "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
