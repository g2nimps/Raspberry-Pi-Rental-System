import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import './Equipment.css';
import './Checkin.css';
import './Settings.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as Icon from 'react-icons/fa';
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Settings(){
    const [pantherId, setPantherId] = useState("")
    const [kitBarcode, setKitBarcode] = useState("")
    // const [checkedOutBy, setCheckedOutBy] = useState("")

    if(!localStorage.getItem('firstName')){
        return(
            <div>
                <BasicNavbar />
                <Container className={"access_card"}>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <Container>
                                    <h1>Access Denied</h1>
                                    <Icon.FaExclamationTriangle/>
                                    <p>
                                        You do not have permission to view this page.
                                        <br/>Please log in to gain access.
                                    </p>
                                    <p>
                                        <Link to="/login" >
                                            <Button variant="primary">Login To Portal</Button>
                                        </Link>
                                    </p>
                                </Container>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    function settingsUpdate(){
        if(localStorage.getItem("firstName")){
            verifyReturn()
            axios.put('/api/rentals', {
                student_panther_id: pantherId,
                kit_barcode: kitBarcode,
                check_in_by: localStorage.getItem("firstName"),
            })
        }
        else{
            console.log("Rental info is not correct")
        }
    }
    function verifyReturn(){

    }
    return(
        <div>
            <BasicNavbar />
            <Row className="inventory">
                <BasicSideNav />
                <Col xs={9} className="column equipColumn">
                    <h1>Site Settings</h1>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Return Date</Form.Label>
                                <Form.Control value="" onChange={e => setPantherId(e.target.value)} placeholder="Return Date"></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button onClick={settingsUpdate} variant="secondary">Update Settings</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}