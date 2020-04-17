import React, {Component} from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './basic-sidenav.css'
import rpilogo from '../rpi_white.png';
class BasicSideNav extends Component{
    render(){
        return(
            <Col xs={3} className="sidebar">
                    <Image src={rpilogo} alt={"Logo"} />
                <h1>Equipment Inventory</h1>
                <p>Due Date: <span>06/01/2020</span></p>
                <hr></hr>
                <Link to="/checkout" className="link">Checkout Raspberry Pi</Link>
                <Link to="/checkin" className="link">Return Raspberry Pi Rental</Link>
                <Link to="/equipment/rented" className="link">View Checked Out Rentals</Link>
                <Link to="/equipment/late" className="link">View Late Rentals</Link>
                <Link to="mailto:paulallen@gsu.edu" className="link">Contact Network Admin</Link>
                <Link to=" https://gsutech.service-now.com/sp#request" className="link">Get Technical Support</Link>
            </Col>
        );
    }
}

export default BasicSideNav;