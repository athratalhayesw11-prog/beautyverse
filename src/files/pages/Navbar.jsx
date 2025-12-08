import React, { useState } from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBookNow = () => {
        alert('Booking system will open soon!');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <span className="logo-text">BeautyVerse</span>
                    <span className="logo-dot">.</span>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#stylists" className="nav-link">Stylists</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <button className="navbar-book-btn" onClick={handleBookNow}>
                        Book Now
                        <span className="btn-icon">→</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" className="mobile-nav-link">Home</a>
                    <a href="#services" className="mobile-nav-link">Services</a>
                    <a href="#stylists" className="mobile-nav-link">Stylists</a>
                    <a href="#about" className="mobile-nav-link">About</a>
                    <a href="#contact" className="mobile-nav-link">Contact</a>
                    <button className="mobile-book-btn" onClick={handleBookNow}>
                        Book Appointment
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;