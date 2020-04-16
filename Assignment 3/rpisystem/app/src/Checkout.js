import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import './Equipment.css';
import './Checkout.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';

export default function Checkout(){
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
    function checkout(){
        if(localStorage.getItem("firstName")){
            verifyRental()
            axios.post('/api/rentals', {
                student_panther_id: pantherId,
                kit_barcode: kitBarcode,
                check_out_date: new Date(),
                due_date: new Date('May 25, 2020 11:59:00'),
                check_out_by: localStorage.getItem("firstName"),
            })
        }
        else{
            console.log("Rental info not correct")
        }
    }

    function verifyRental(){

    }

    return(
        <div>
            <BasicNavbar />
            <Row className="inventory">
                <BasicSideNav />
                <Col xs={9} className="column equipColumn">
                    <h1>Checkout A Raspberry Pi</h1>
                    <Form className="checkout-form">
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
                        <Button onClick={checkout} variant="danger">Checkout</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}