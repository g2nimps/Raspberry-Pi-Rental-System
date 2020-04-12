import React, { useState } from 'react';
import './App.css';
import BasicNavbar from './Components/basic-navbar';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Application(){
    const [pantherId, setPantherId] = useState("")
    const [kitBarcode, setKitBarcode] = useState("")
    // const [checkedOutBy, setCheckedOutBy] = useState("")
    
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

    function verifyRental(){

    }

    function verifyReturn(){

    }

    return(
        <div>
            <BasicNavbar />
            <Container>
                <Row>
                    <Form className="checkout-form">
                        <Form.Row>
                            <h1>Checkout Portion</h1>
                        </Form.Row>
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
                        <Button onClick={checkout} variant="primary">Checkout</Button>
                    </Form>
                </Row>
                <hr></hr>
                <Row>
                    <Form>
                        <Form.Row>
                            <h1>Checkin Portion</h1>
                        </Form.Row>
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
                        <Button onClick={checkin} variant="primary">Checkin</Button>
                    </Form>
                </Row>
            </Container>
        </div>
    );
}
