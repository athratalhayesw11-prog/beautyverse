import React, { useState, useRef } from 'react';
import '../styles/TopStylist.css';

const TopStylist = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const stylistsRef = useRef(null);

    const stylists = [
        {
            id: 1,
            name: "Emma Watson",
            experience: "5 Years",
            specialty: "Hair Coloring & Styling",
            rating: 4.9,
            totalRatings: 120,
            image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Expert in balayage and creative cuts"
        },
        {
            id: 2,
            name: "Sophia Lee",
            experience: "7 Years",
            specialty: "Bridal Makeup",
            rating: 4.8,
            totalRatings: 95,
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Specializes in natural bridal looks"
        },
        {
            id: 3,
            name: "Michael Chen",
            experience: "8 Years",
            specialty: "Men's Grooming",
            rating: 4.7,
            totalRatings: 110,
            image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Beard styling expert"
        },
        {
            id: 4,
            name: "Isabella Rossi",
            experience: "6 Years",
            specialty: "Skincare Treatments",
            rating: 4.9,
            totalRatings: 85,
            image: "https://images.unsplash.com/photo-1551836026-d5c2c0b4d8a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Facial & anti-aging specialist"
        },
        {
            id: 5,
            name: "David Park",
            experience: "4 Years",
            specialty: "Nail Artistry",
            rating: 4.6,
            totalRatings: 75,
            image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Creative nail designs"
        },
        {
            id: 6,
            name: "Olivia Taylor",
            experience: "9 Years",
            specialty: "Hair Extensions",
            rating: 4.8,
            totalRatings: 105,
            image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Extension installation expert"
        },
        {
            id: 7,
            name: "James Wilson",
            experience: "3 Years",
            specialty: "Barbering",
            rating: 4.5,
            totalRatings: 65,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Modern fade techniques"
        },
        {
            id: 8,
            name: "Ava Martinez",
            experience: "5 Years",
            specialty: "Lash Extensions",
            rating: 4.7,
            totalRatings: 90,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Volume & hybrid lash expert"
        }
    ];

    const handleNext = () => {
        if (stylistsRef.current) {
            const scrollAmount = stylistsRef.current.clientWidth;
            stylistsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
        setActiveIndex(prev => (prev + 1) % stylists.length);
    };

    const handlePrev = () => {
        if (stylistsRef.current) {
            const scrollAmount = -stylistsRef.current.clientWidth;
            stylistsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
        setActiveIndex(prev => (prev - 1 + stylists.length) % stylists.length);
    };

    const handleBookStylist = (stylist) => {
        alert(`Booking appointment with ${stylist.name} - ${stylist.specialty}`);
    };

    return (
        <section className="top-stylists" id="stylists">
            <div className="stylists-container">
                {/* Header */}
                <div className="stylists-header">
                    <div className="section-badge">
                        <span className="badge-icon">⭐</span>
                        Our Experts
                    </div>
                    <h2 className="section-title">
                        Meet Our <span className="title-highlight">Top Stylists</span>
                    </h2>
                    <p className="section-subtitle">
                        Experience beauty transformation with our certified professionals
                    </p>
                </div>

                {/* Navigation Arrows */}
                <div className="navigation-container">
                    <button className="nav-arrow left-arrow" onClick={handlePrev}>
                        <span className="arrow-icon">←</span>
                    </button>

                    {/* Stylists Carousel */}
                    <div className="stylists-carousel" ref={stylistsRef}>
                        {stylists.map((stylist) => (
                            <div className="stylist-card" key={stylist.id}>
                                {/* Profile Image */}
                                <div className="profile-image-container">
                                    <img
                                        src={stylist.image}
                                        alt={stylist.name}
                                        className="profile-image"
                                        loading="lazy"
                                    />
                                    <div className="experience-badge">
                                        <span className="exp-icon">⭐</span>
                                        {stylist.experience}
                                    </div>
                                    <div className="online-status"></div>
                                </div>

                                {/* Stylist Info */}
                                <div className="stylist-info">
                                    <h3 className="stylist-name">{stylist.name}</h3>
                                    <p className="stylist-description">{stylist.description}</p>

                                    <div className="specialty-tag">
                                        <span className="tag-icon">🎯</span>
                                        {stylist.specialty}
                                    </div>

                                    {/* Rating */}
                                    <div className="rating-container">
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`star ${i < Math.floor(stylist.rating) ? 'filled' : ''}`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <div className="rating-text">
                                            <span className="rating-number">{stylist.rating}</span>
                                            <span className="rating-count">({stylist.totalRatings} reviews)</span>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        className="book-stylist-btn"
                                        onClick={() => handleBookStylist(stylist)}
                                    >
                                        <span className="book-icon">📅</span>
                                        Book Stylist
                                    </button>
                                </div>

                                {/* Card Decoration */}
                                <div className="card-decoration"></div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-arrow right-arrow" onClick={handleNext}>
                        <span className="arrow-icon">→</span>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="dots-indicator">
                    {stylists.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => {
                                if (stylistsRef.current) {
                                    const cardWidth = 320; // Fixed card width + gap
                                    stylistsRef.current.scrollTo({
                                        left: index * cardWidth,
                                        behavior: 'smooth'
                                    });
                                }
                                setActiveIndex(index);
                            }}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="view-all-container">
                    <button className="view-all-btn">
                        View All Stylists
                        <span className="view-arrow">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopStylist;