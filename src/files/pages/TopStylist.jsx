import React, { useState, useRef, useEffect } from 'react';
import '../styles/TopStylist.css';
import left from "../images/left.png";
import right from "../images/right.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const TopStylist = () => {
    const [activeDots, setActiveDots] = useState([0]);
    const [dotsCount, setDotsCount] = useState(3);
    const [cardWidth, setCardWidth] = useState(303);
    const dotsCountRef = useRef(dotsCount);
    const cardWidthRef = useRef(cardWidth);
    const cardGapRef = useRef(10);
    const stylistsRef = useRef(null);
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const carouselRef = useRef(null);
    const dotsRef = useRef(null);

    

    useEffect(() => {
        dotsCountRef.current = dotsCount;
    }, [dotsCount]);

    useEffect(() => {
        cardWidthRef.current = cardWidth;
    }, [cardWidth]);

    useEffect(() => {
        const updateResponsiveValues = () => {
            // Update card width based on screen size
            if (window.innerWidth <= 420) {
                setCardWidth(280); // From CSS @media (max-width: 420px)
            } else {
                setCardWidth(303); // From default CSS
            }

            // Update dots count based on screen size
            if (window.innerWidth <= 600) {
                setDotsCount(8);
            } else {
                setDotsCount(3);
            }
        };

        updateResponsiveValues();
        window.addEventListener("resize", updateResponsiveValues);

        return () => window.removeEventListener("resize", updateResponsiveValues);
    }, []);

    // GSAP Animation on viewport entry
    useEffect(() => {
        if (!sectionRef.current) return;

        // Create a timeline for the animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%", // Animation starts when top of element is 80% from top of viewport
                end: "bottom 20%",
                toggleActions: "play none none none", // Play once, no reverse, no reset
                once: true, // Animation triggers only once
                markers: false // Set to true for debugging
            }
        });

        // Header animation
        tl.from(headerRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
            .from('.stylist-card', {
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)",
                delay: 0.2
            }, "-=0.3")
            .from('.nav-button', {
                scale: 0,
                opacity: 0,
                stagger: 0.2,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)"
            }, "-=0.4")
            .from(dotsRef.current.children, {
                scale: 0,
                opacity: 0,
                stagger: 0.1,
                duration: 0.4,
                ease: "back.out(1.7)"
            }, "-=0.3");

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Handle manual scroll tracking
    const handleScroll = () => {
        if (!stylistsRef.current) return;

        const carousel = stylistsRef.current;
        const scrollLeft = carousel.scrollLeft;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        if (maxScroll <= 0) return;

        const progress = scrollLeft / maxScroll;
        const totalDots = dotsCountRef.current;
        const step = 1 / totalDots;

        const activeIndex = Math.min(
            totalDots - 1,
            Math.floor(progress / step)
        );

        setActiveDots([activeIndex]);
    };

    // Initialize scroll event listener
    useEffect(() => {
        const carousel = stylistsRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
            // Trigger initial calculation
            handleScroll();
        }

        return () => {
            if (carousel) {
                carousel.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    // Handle navigation arrows
    const handlePrevClick = () => {
        if (!stylistsRef.current) return;

        const carousel = stylistsRef.current;
        const scrollAmount = cardWidthRef.current + cardGapRef.current;

        const newScroll = Math.max(0, carousel.scrollLeft - scrollAmount);
        carousel.scrollTo({
            left: newScroll,
            behavior: 'smooth'
        });
    };

    const handleNextClick = () => {
        if (!stylistsRef.current) return;

        const carousel = stylistsRef.current;
        const scrollAmount = cardWidthRef.current + cardGapRef.current;

        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        const newScroll = Math.min(maxScroll, carousel.scrollLeft + scrollAmount);
        carousel.scrollTo({
            left: newScroll,
            behavior: 'smooth'
        });
    };

    const handleBookStylist = (stylist) => {
        alert(`Booking appointment with ${stylist.name} - ${stylist.specialty}`);
    };

    return (
        <section className="top-stylists" id="stylists" ref={sectionRef}>
            {/* Header */}
            <div className="services-header" ref={headerRef}>
                <div className="services-badge">
                    <span className="badge-icon">⭐</span>
                    Our Experts
                </div>
                <h2 className="services-title">
                    Meet Our <span className="title-gradient">Top Stylists</span>
                </h2>
                <p className="services-subtitle">
                    Experience beauty transformation with our certified professionals
                </p>
            </div>

            <div className="carousel-container" ref={carouselRef}>
                <button
                    className="nav-button prev-button"
                    onClick={handlePrevClick}
                    aria-label="Previous stylists"
                >
                    <img src={left} alt="" />
                </button>

                <div className="stylists-carousel" ref={stylistsRef}>
                    {stylists.map((stylist) => (
                        <div className="stylist-card" key={stylist.id}>
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
                            </div>

                            <div className="stylist-info">
                                <h3 className="stylist-name">{stylist.name}</h3>
                                <p className="stylist-description">{stylist.description}</p>

                                <div className="specialty-tag">
                                    <span className="tag-icon">🎯</span>
                                    {stylist.specialty}
                                </div>

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

                                <button
                                    className="book-stylist-btn"
                                    onClick={() => handleBookStylist(stylist)}
                                >
                                    <span className="book-icon">📅</span>
                                    Book Stylist
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="nav-button next-button"
                    onClick={handleNextClick}
                    aria-label="Next stylists"
                >
                    <img src={right} alt="" />
                </button>
            </div>

            <div className="dots-indicator" ref={dotsRef}>
                {Array.from({ length: dotsCount }).map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${activeDots[0] === index ? 'active' : ''}`}
                        aria-label={`Go to section ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default TopStylist;