import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './basic-navbar.css'
import { useHistory } from 'react-router-dom';

export default function BasicNavbar(){
    const history = useHistory();

    function logout(){
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName")
        history.push("/");
    }

    if(localStorage.getItem('firstName')){
        const firstName = localStorage.getItem('firstName');
        return(
            <Navbar className="navbar">
                <Navbar.Brand className="brand" href="/" style={{color:"white", fontSize:"18px"}}>RPI Rental System</Navbar.Brand>
                <Nav className="nav">

                    <NavDropdown title={firstName} id="nav-dropdown" style={{color:"white", fontSize:"15px"}}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link href="/equipment" style={{color:"white", fontSize:"15px"}}>Equipment</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/rental" style={{color:"white", fontSize:"15px"}}>Rentals</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
    return(
        <Navbar className="navbar">
            <Navbar.Brand className="brand" href="/" style={{color:"white", fontSize:"20px"}}>RpiSystem</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/register" style={{color:"white", fontSize:"15px"}}>Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login" style={{color:"white", fontSize:"15px"}}>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/equipment" style={{color:"white", fontSize:"15px"}}>Equipment</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}