import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/PopUp.css';

const PopUp = ({ isVisible, onClose }) => {

    const popupRef = useRef(null);
    const overlayRef = useRef(null);

    // GSAP entry + exit animation
    useEffect(() => {
        if (isVisible) {
            // SHOW animation
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, ease: "power2.out" }
            );

            gsap.fromTo(
                popupRef.current,
                { opacity: 0, scale: 0.8, y: -20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
            );
        } else {
            // HIDE animation
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });

            gsap.to(popupRef.current, {
                opacity: 0,
                scale: 0.85,
                y: -20,
                duration: 0.35,
                ease: "power2.in"
            });
        }
    }, [isVisible]);

    // Close when clicking overlay
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            onClose();
        }
    };

    if (!isVisible) return null;

    return (
        <>
            <div
                className="popup-overlay"
                ref={overlayRef}
                onClick={handleOverlayClick}
            ></div>

            <div className="modern-cta" ref={popupRef}>
                <button className="popup-close-btn" onClick={onClose}>×</button>

                <div className="cta-background"></div>
                <div className="offer-card">
                    <div className="offer-header">
                        <span className="offer-badge">SPECIAL OFFER</span>
                        <h4 className="offer-title">Online Booking</h4>
                    </div>

                    <div className="offer-body">
                        <div className="discount-badge">
                            <span className="discount-percent">20%</span>
                            <span className="discount-text">OFF</span>
                        </div>

                        <p className="offer-desc">On your first service booking</p>

                        <button className="claim-offer-btn">
                            Claim Your Discount <span className="offer-arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopUp;
