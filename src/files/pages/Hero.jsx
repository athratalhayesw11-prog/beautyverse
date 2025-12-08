import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    const handleBookNow = () => {
        alert('Redirecting to booking system...');
    };

    const scrollToFeatures = () => {
        document.querySelector('.features-section').scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section className="hero-section" id="home">
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-badge-hero-container">
                <div className="hero-badge">
                    <span className="badge-text">✨ Premium Salon Experience</span>
                </div>

                <div className="hero-container">
                    <div className="hero-content">


                        <h1 className="hero-title">
                            Where Beauty Meets
                            <span className="title-highlight"> Innovation</span>
                        </h1>

                        <p className="hero-subtitle">
                            Experience luxury beauty treatments in a modern, relaxing environment.
                            Our expert stylists use cutting-edge techniques to bring out your natural beauty.
                        </p>

                        <div className="hero-buttons">
                            <button className="hero-primary-btn" onClick={handleBookNow}>
                                <span className="btn-text">Book Your Session</span>
                                <span className="btn-arrow">→</span>
                            </button>
                            <button className="hero-secondary-btn" onClick={scrollToFeatures}>
                                <span className="btn-text">Explore Services</span>
                                <span className="btn-play">▶</span>
                            </button>
                        </div>


                    </div>

                    <div className="hero-cards">
                        <div className="floating-card card-1">
                            <div className="card-icon">💇‍♀️</div>
                            <div className="card-content">
                                <h4>Hair Styling</h4>
                                <p>Expert cuts & colors</p>
                            </div>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-icon">💅</div>
                            <div className="card-content">
                                <h4>Nail Care</h4>
                                <p>Luxury manicures</p>
                            </div>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-icon">✨</div>
                            <div className="card-content">
                                <h4>Skincare</h4>
                                <p>Premium treatments</p>
                            </div>
                        </div>
                        <div className="floating-card card-4">
                            <div className="card-icon">💄</div>
                            <div className="card-content">
                                <h4>Makeup <span>Artistry</span></h4>
                                <p>Professional makeup</p>
                            </div>
                        </div>
                        <div className="floating-card card-5">
                            <div className="card-icon">🧖‍♀️</div>
                            <div className="card-content">
                                <h4>Spa <span>& Massage</span></h4>
                                <p>Relaxing therapies</p>
                            </div>
                        </div>
                        <div className="floating-card card-6">
                            <div className="card-icon">✂️</div>
                            <div className="card-content">
                                <h4>Waxing</h4>
                                <p>Hair removal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Expert Stylists</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">4.9</div>
                        <div className="stat-label">Customer Rating</div>
                    </div>
                </div>
            </div>

            {/* <div className="scroll-indicator">
                <div className="scroll-text">Scroll to explore</div>
                <div className="scroll-line"></div>
            </div> */}
        </section>
    );
};

export default Hero;