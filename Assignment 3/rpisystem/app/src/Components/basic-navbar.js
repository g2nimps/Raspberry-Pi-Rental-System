import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './basic-navbar.css'

class BasicNavbar extends Component{
    render(){
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
}

export default BasicNavbar;