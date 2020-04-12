import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Equipment.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';

export default function Equipment(){
    if(!localStorage.getItem('firstName')){
        return(
            <div>
                <BasicNavbar />
                <h1>Please log in to use Equipment Page.</h1>
            </div>
        );
    }
    return(
        <div>
            <BasicNavbar />
            <Row className="inventory">
                <BasicSideNav />
                <Col xs={9} className="column">
                    world
                </Col>
            </Row>
        </div>
    );    
}