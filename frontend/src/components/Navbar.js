// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    localStorage.getItem("isAdminLoggedIn") === "true"
  );

  const location = useLocation();

  // Listen for route changes (re-check login status)
  useEffect(() => {
    setIsAdminLoggedIn(localStorage.getItem("isAdminLoggedIn") === "true");
  }, [location]);

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    backdropFilter: 'blur(14px)',
    background: 'linear-gradient(90deg, rgba(10,15,40,0.96), rgba(35,19,70,0.96))',
    borderBottom: '1px solid rgba(148,163,184,0.4)',
    zIndex: 20
  };

  const logoStyle = {
    fontSize: '20px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#e5e7eb',
    letterSpacing: '0.04em'
  };

  const logoAccentStyle = {
    background: 'linear-gradient(135deg, #6366f1, #06b6d4, #22c55e)',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const linkBaseStyle = {
    textDecoration: 'none',
    color: '#cbd5f5',
    fontSize: '14px',
    padding: '6px 12px',
    borderRadius: '999px',
    transition: 'background 0.2s, color 0.2s, transform 0.1s'
  };

  const activeStyle = {
    ...linkBaseStyle,
    background: 'linear-gradient(135deg, #6366f1, #22c55e)',
    color: '#f9fafb'
  };

  const logoutBtnStyle = {
    marginLeft: '8px',
    background: 'linear-gradient(135deg, #f97373, #ef4444)',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '999px',
    fontSize: '13px',
    fontWeight: 500,
    boxShadow: '0 10px 25px rgba(239,68,68,0.4)'
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsAdminLoggedIn(false);
    window.location.href = "/admin-login";
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header style={headerStyle}>
      <div>
        <Link to="/" style={logoStyle}>
          Sentiment<span style={logoAccentStyle}>AI</span>
        </Link>
      </div>

      <nav style={navLinksStyle}>
        <Link
          to="/"
          style={isActive('/') ? activeStyle : linkBaseStyle}
        >
          Home
        </Link>

        {!isAdminLoggedIn && (
          <Link
            to="/admin-login"
            style={isActive('/admin-login') ? activeStyle : linkBaseStyle}
          >
            Admin Login
          </Link>
        )}

        {isAdminLoggedIn && (
          <>
            <Link
              to="/user-input"
              style={isActive('/user-input') ? activeStyle : linkBaseStyle}
            >
              Data Upload
            </Link>

            <Link
              to="/analysis"
              style={isActive('/analysis') ? activeStyle : linkBaseStyle}
            >
              Analysis
            </Link>

            <button
              onClick={handleLogout}
              style={logoutBtnStyle}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
