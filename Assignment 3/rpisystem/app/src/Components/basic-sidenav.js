import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './basic-sidenav.css'

class BasicSideNav extends Component{
    render(){
        return(
            <Col xs={3} className="sidebar">
                <h1>Equipment Inventory</h1>
                <hr></hr>
                <Link to="/equipment/raspberry-pi" className="link" style={{textDecoration:"none", color:"black"}}><h4>Raspberry Pi</h4></Link>
            </Col>
        );
    }
}

export default BasicSideNav;