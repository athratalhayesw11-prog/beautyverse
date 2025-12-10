import React from 'react';
import '../styles/FeaturesSection.css';


const FeaturesSection = () => {
    const features = [
        {
            icon: '💇‍♀️',
            title: 'Expert Stylists',
            description: 'Certified professionals with 10+ years of experience in modern beauty techniques.',
            gradient: 'gradient-1'
        },
        {
            icon: '🌿',
            title: 'Natural Products',
            description: 'Organic, cruelty-free products for safe and sustainable beauty treatments.',
            gradient: 'gradient-2'
        },
        {
            icon: '⚡',
            title: 'Quick Service',
            description: 'Efficient appointments with minimal waiting time and maximum satisfaction.',
            gradient: 'gradient-3'
        },
        {
            icon: '✨',
            title: 'Luxury Experience',
            description: 'Premium ambiance with personalized attention for every client.',
            gradient: 'gradient-4'
        },
        {
            icon: '📱',
            title: 'Easy Booking',
            description: 'Simple online booking system with flexible scheduling options.',
            gradient: 'gradient-5'
        },
        {
            icon: '🌟',
            title: 'Membership Benefits',
            description: 'Exclusive perks and discounts for our regular customers.',
            gradient: 'gradient-6'
        }
    ];

    return (
        <section className="features-section" id="services">
            <div className="features-container">
                <div className="services-header">
                    <div className="services-badge">
                        <span className="badge-icon">✨</span>
                        Our Features
                    </div>

                    <h2 className="services-title">
                        Why Choose <span className="title-gradient">BeautyVerse</span>
                    </h2>

                    <p className="services-subtitle">
                        We combine luxury with innovation to provide the ultimate beauty experience.
                    </p>
                </div>


                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className={`feature-card ${feature.gradient}`} key={index}>
                            <div className="feature-icon-container">
                                <span className="feature-icon">{feature.icon}</span>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <div className="feature-hover-effect"></div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default FeaturesSection;