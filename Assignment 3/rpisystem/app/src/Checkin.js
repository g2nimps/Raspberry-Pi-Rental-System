import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import './Equipment.css';
import './Checkin.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';
import Badge from "react-bootstrap/Badge";

export default function Checkin(){
    const [pantherId, setPantherId] = useState("")
    const [kitBarcode, setKitBarcode] = useState("")
    // const [checkedOutBy, setCheckedOutBy] = useState("")
    if(!localStorage.getItem('firstName')){
        return(
            <div>
                <BasicNavbar />
                <h1>Please log in to use Equipment Page.</h1>
            </div>
        );
    }
    function checkin(){
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
                    <h1>Return Raspberry Pi Rental</h1>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Student PantherId</Form.Label>
                                <Form.Control value={pantherId} onChange={e => setPantherId(e.target.value)} placeholder="Student's PantherId"></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Equipment Kit Barcode</Form.Label>
                                <Form.Control value={kitBarcode} onChange={e => setKitBarcode(e.target.value)} placeholder="Kit Barcode"></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formBasicCheckbox">
                            <hr/>
                            <div className={"disclaimer"}>
                                <Badge variant="primary">Item Return Check</Badge>
                                <ul>
                                  <li>Raspberry PI 3 B+ with touchscreen</li>
                                    <li>Keyboard</li>
                                    <li>Power Cable</li>
                                    <li>HDMI Cable</li>
                                    <li>SD Reader</li>
                                    <li>Plastic Container</li>
                                </ul>

                                <Form.Group>
                                    <Form.Check name="rpi_broken"
                                        label="Returned Kit is Incomplete/RPI Broken"
                                    />
                                </Form.Group>

                            </div>
                        </Form.Group>
                        <Button onClick={checkin} variant="secondary">Checkin</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}