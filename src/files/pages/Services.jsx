import React, { useState } from 'react';
import '../styles/Services.css';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            id: 1,
            title: "Hair Styling & Coloring",
            description: "Expert haircuts, styling, and vibrant coloring with premium products.",
            price: "$65 - $150",
            duration: "1-3 hours",
            icon: "💇‍♀️",
            category: "Hair",
            popular: true,
            features: ["Custom color matching", "Keratin treatment", "Hair spa included"],
            image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            id: 2,
            title: "Luxury Manicure & Pedicure",
            description: "Premium nail care with gel polish and relaxing massage therapy.",
            price: "$45 - $95",
            duration: "1-2 hours",
            icon: "💅",
            category: "Nails",
            popular: true,
            features: ["Gel/SNS nails", "Spa pedicure", "Hand massage"],
            image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            gradient: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)"
        },
        {
            id: 3,
            title: "Facial & Skincare",
            description: "Rejuvenating facials with organic products for glowing skin.",
            price: "$85 - $200",
            duration: "1-2 hours",
            icon: "✨",
            category: "Skincare",
            popular: false,
            features: ["Deep cleansing", "Anti-aging treatment", "LED therapy"],
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
        },
        {
            id: 4,
            title: "Makeup Artistry",
            description: "Professional makeup for special occasions and photo shoots.",
            price: "$75 - $250",
            duration: "1-2 hours",
            icon: "💄",
            category: "Makeup",
            popular: false,
            features: ["Bridal makeup", "Airbrush technique", "Lash extensions"],
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
        },
        {
            id: 5,
            title: "Spa & Massage",
            description: "Relaxing full-body massage with aromatherapy oils.",
            price: "$90 - $180",
            duration: "1-2 hours",
            icon: "🧖‍♀️",
            category: "Spa",
            popular: true,
            features: ["Hot stone massage", "Aromatherapy", "Full body treatment"],
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)"
        },
        {
            id: 6,
            title: "Waxing & Hair Removal",
            description: "Professional waxing services for smooth, hair-free skin.",
            price: "$30 - $120",
            duration: "30-60 mins",
            icon: "✂️",
            category: "Waxing",
            popular: false,
            features: ["Brazilian wax", "Full body wax", "Post-wax care"],
            image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
        }
    ];

    const categories = ["All", "Hair", "Nails", "Skincare", "Makeup", "Spa", "Waxing"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredServices = activeCategory === "All"
        ? services
        : services.filter(service => service.category === activeCategory);

    const handleBookNow = (service) => {
        setSelectedService(service);
        alert(`Booking ${service.title} - Starting at ${service.price}`);
    };

    return (
        <section className="featured-services" id="services">
            {/* Section Header */}
            <div className="services-header">
                <div className="services-badge">
                    <span className="badge-icon">✨</span>
                    Premium Services
                </div>
                <h2 className="services-title">
                    Experience Luxury <span className="title-gradient">Beauty Services</span>
                </h2>
                <p className="services-subtitle">
                    Indulge in our signature treatments designed by top beauty experts
                </p>
            </div>

            {/* Category Filter */}
            <div className="category-filter">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        <span className="btn-text">{category}</span>
                        <span className="btn-underline"></span>
                    </button>
                ))}
            </div>

            {/* Modern Services Grid */}
            <div className="services-grid">
                {filteredServices.map((service) => (
                    <div
                        className={`service-card ${service.popular ? 'popular' : ''} ${hoveredCard === service.id ? 'hovered' : ''}`}
                        key={service.id}
                        onMouseEnter={() => setHoveredCard(service.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{ '--card-gradient': service.gradient }}
                    >
                        {/* Modern Card Design */}
                        <div className="card-top-section">
                            <div className="service-image-wrapper">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-image"
                                    loading="lazy"
                                />
                                <div className="image-overlay"></div>
                                <div className="category-tag">
                                    {service.category}
                                </div>
                                {service.popular && (
                                    <div className="popular-tag">
                                        <span className="popular-icon">⭐</span>
                                        Trending
                                    </div>
                                )}
                            </div>

                            <div className="service-info">
                                <div className="service-header">
                                    <h3 className="service-title">{service.title}</h3>
                                    <div className="price-badge">
                                        {service.price}
                                    </div>
                                </div>

                                <p className="service-description">{service.description}</p>

                                <div className="service-meta">
                                    <div className="meta-chip">
                                        <span className="meta-icon">⏱️</span>
                                        {service.duration}
                                    </div>
                                    <div className="meta-chip">
                                        <span className="meta-icon">⭐</span>
                                        4.8/5
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features & Actions */}
                        <div className="card-bottom-section">
                            <div className="features-list">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <span className="feature-check">✓</span>
                                        <span className="feature-text">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="action-buttons">
                                <button
                                    className="primary-action-btn"
                                    onClick={() => handleBookNow(service)}
                                >
                                    <span className="action-icon">📅</span>
                                    Book Now
                                </button>
                                {/* <button
                                        className="secondary-action-btn"
                                        onClick={() => alert(`Learn more about ${service.title}`)}
                                    >
                                        <span className="action-icon">ℹ️</span>
                                        Details
                                    </button> */}
                            </div>
                        </div>

                        {/* Modern Hover Effect */}
                        <div className="card-hover-effect"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
