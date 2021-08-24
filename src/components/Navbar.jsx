/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { CloseIcon, MenuBurgerIcon } from './Icons';

const Navbar = () => {
    const [showBoxShadow, setShowBoxShadow] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);

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

                <button className="menu-burger" type="button" onClick={() => setDrawerVisible(true)}>
                    <MenuBurgerIcon />
                </button>

                <ul className="links">
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <Drawer
                id="mobile-navbar-drawer"
                placement="right"
                closable
                closeIcon={<CloseIcon />}
                visible={drawerVisible}
                onClose={() => setDrawerVisible(false)}
                style={{ padding: 0 }}
            >
                <ul className="links">
                    <li onClick={() => setDrawerVisible(false)}><a href="#portfolio">Portfolio</a></li>
                    <li onClick={() => setDrawerVisible(false)}><a href="#about">About</a></li>
                    <li onClick={() => setDrawerVisible(false)}><a href="#contact">Contact</a></li>
                </ul>
            </Drawer>
        </header>
    );
};

export default Navbar;
