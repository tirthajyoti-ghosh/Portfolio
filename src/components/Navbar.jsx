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

    const menuItems = ['Portfolio', 'About', 'Contact'];
    const menuItemsJsx = (
        <ul className="links">
            {menuItems.map((menuItem) => (
                <li key={menuItem} onClick={() => setDrawerVisible(false)}>
                    <a href={`#${menuItem.toLowerCase()}`}>{menuItem}</a>
                </li>
            ))}
        </ul>
    );

    return (
        <header className={showBoxShadow ? 'box-shadow' : ''}>
            <nav className="navbar">
                <a href="/" className="logo">T. Ghosh</a>

                <button className="menu-burger" type="button" onClick={() => setDrawerVisible(true)}>
                    <MenuBurgerIcon />
                </button>

                {menuItemsJsx}
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
                {menuItemsJsx}
            </Drawer>
        </header>
    );
};

export default Navbar;
