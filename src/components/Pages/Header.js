import React, { useState } from 'react'
import '../css/header.css'
import { Container } from 'react-bootstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="navbar">
            <Container>
                <div className="navbar-brand">
                    <div className='lg'><a href="/" className="brand-logo">Milk Distribution</a></div>
                    <div className='bn'><button className="hamburger" onClick={toggleMenu}>&#9776;</button>
                    </div>

                </div>
                <nav className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/home/">Home</a></li>
                        <li><a href="/home/products">Products</a></li>
                        <li><a href="/home/about">About Us</a></li>
                        <li><a href="/home/contact">Contact</a></li>
                    </ul>
                </nav></Container>
        </header>
    )
}

export default Header
