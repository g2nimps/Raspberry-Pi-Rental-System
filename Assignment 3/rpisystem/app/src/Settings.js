import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import './Equipment.css';
import './Checkin.css';
import './Settings.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';

export default function Settings(){
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
                        <Button onClick={settingsUpdate} variant="secondary">Update Settings</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}