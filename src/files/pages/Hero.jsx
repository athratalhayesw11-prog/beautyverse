import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;

        const badge = el.querySelector(".hero-badge");
        const title = el.querySelector(".hero-title");
        const subtitle = el.querySelector(".hero-subtitle");
        const buttons = el.querySelectorAll(".hero-buttons button");
        const cards = el.querySelectorAll(".floating-card");
        const stats = el.querySelector(".hero-stats");

        // Initial Positions (Important!)
        gsap.set(badge, { y: -80, opacity: 0 });
        gsap.set(title, { x: -80, opacity: 0 });
        gsap.set(subtitle, { x: -80, opacity: 0 });
        gsap.set(buttons, { x: -50, opacity: 0 });
        gsap.set(cards, { x: 80, opacity: 0 }); // right → left
        gsap.set(stats, { y: 40, opacity: 0 });

        // Main Intro Timeline
        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.9 }
        });

        tl.to(badge, { y: 0, opacity: 1 })                     // 1: badge top → down
            .to(title, { x: 0, opacity: 1 }, "-=0.4")            // 2: title left → right
            .to(subtitle, { x: 0, opacity: 1 }, "-=0.5")         // 3: subtitle left → right
            .to(buttons, { x: 0, opacity: 1, stagger: 0.15 }, "-=0.4");  // 4: buttons left → right

        // Cards: right → left, one by one
        gsap.to(cards, {
            x: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el.querySelector(".hero-cards"),
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

        // Stats animation when fully in viewport
        gsap.to(stats, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: stats,
                start: "top 95%", // fully in viewport
                toggleActions: "play none none none",
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
            tl.kill();
        };
    }, []);

    const handleBookNow = () => {
        alert("Redirecting to booking system...");
    };

    const scrollToFeatures = () => {
        const target = document.querySelector(".features-section");
        if (target) target.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="hero-section" id="home" ref={heroRef}>
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
                                <span className="btn-text">Book <i>Your</i> Session</span>
                                <span className="btn-arrow">→</span>
                            </button>

                            <button className="hero-secondary-btn" onClick={scrollToFeatures}>
                                <span className="btn-text"><i>Explore</i> Services</span>
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
        </section>
    );
};

export default Hero;
