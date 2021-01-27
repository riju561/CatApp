import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import styles from './navbar.module.css';

//component for Navbar
const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top" className={styles.navbar}>
            <Navbar.Brand><h2 className={styles.h}><a href="/cdsc/#/first">CatApp</a></h2></Navbar.Brand>
            {/* Collapses when viewport width becomes less than 768px */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className={styles.nav}>
                    <Nav.Item><a href="/cdsc/#/breedlist">Breed List</a></Nav.Item>
                    <Nav.Item><a href="/cdsc/#/info">Information</a></Nav.Item>
                    <Nav.Item><a href="/cdsc/#/carousel">Carousel</a></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;

