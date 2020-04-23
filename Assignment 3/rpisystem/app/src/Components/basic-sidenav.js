import React, {Component} from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './basic-sidenav.css'
import rpilogo from '../rpi_white.png';

class BasicSideNav extends Component{
    render(){
        return(
            <Col xs={3} className="sidebar">
                <Image src={rpilogo} alt={"Logo"} />
                <h1>Equipment Inventory</h1>
                <p>Due Date: <span>{localStorage.getItem('semester_due_date')}</span></p>
                <hr></hr>
                <Link to="/equipment" className="link">View All Equipment</Link>
                <Link to="/equipment-damaged" className="link">View Broken Equipment</Link>
                <Link to="/checkout" className="link">Checkout Raspberry Pi</Link>
                <Link to="/checkin" className="link">Return Raspberry Pi Rental</Link>
                <Link to="/rental" className="link">View All Rentals</Link>
                <Link to="/rental-late" className="link">View Late Rentals</Link>
                <Link to="/message" className="link">Contact Network Admin</Link>
                <Link to="/support" className="link">Get Technical Support</Link>
                {(localStorage.getItem('role')) && localStorage.getItem('role').toLowerCase() === "superadmin"?
                    <Link to="/settings" className="link system_admin">System Settings</Link>
                    :
                    null
                }

            </Col>
        );
    }
}

export default BasicSideNav;