import styles from './Navbar.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
interface NavbarProps {
    children?: React.ReactNode | React.ReactChild,
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <nav className={styles.navbar}>
            {children}
        </nav>
    );
};

export default Navbar;