// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserHome from './components/UserHome';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const handleLogin = (userToken, userRole) => {
    setToken(userToken);
    setRole(userRole);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken(null);
    setRole(null);
  };

  return (
    <Router>
      <div className="App relative min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <Home />
              ) : (
                <Navigate to={role === 'admin' ? '/admin' : '/user-home'} />
              )
            }
          />

          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to={role === 'admin' ? '/admin' : '/user-home'} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              isAuthenticated ? (
                <Navigate to={role === 'admin' ? '/admin' : '/user-home'} />
              ) : (
                <Register onRegister={handleLogin} />
              )
            }
          />

          {isAuthenticated && role === 'admin' && (
            <Route path="/admin" element={<AdminDashboard token={token} />} />
          )}

          {isAuthenticated && role === 'user' && (
            <Route path="/user-home" element={<UserHome token={token} />} />
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {isAuthenticated && (
          <div className="absolute bottom-4 right-4 z-50">
            <button
              onClick={handleLogout}
              className="p-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-md hover:from-orange-600 hover:to-red-600 transition-transform transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
