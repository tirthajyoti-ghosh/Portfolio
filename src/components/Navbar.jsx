import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [showBoxShadow, setShowBoxShadow] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY >= 130 && !showBoxShadow) {
                setShowBoxShadow(true);
            } else if (window.scrollY < 130 && showBoxShadow) {
                setShowBoxShadow(false);
            }
        });
    });

    return (
        <header className={showBoxShadow ? 'box-shadow' : ''}>
            <nav className="navbar">
                <a href="/" className="logo">T. Ghosh</a>

                <ul className="links">
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
