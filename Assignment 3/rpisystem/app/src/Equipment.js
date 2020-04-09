import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import './Equipment.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';

class Equipment extends Component{
    render(){
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
}

export default Equipment;