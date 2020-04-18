import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Equipment.css';
import './Checkout.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import Badge from 'react-bootstrap/Badge';
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
        /* this page would create a user, and then */
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
                                <Form.Control value={pantherId} onChange={e => setPantherId(e.target.value)} placeholder="Student's PantherId" required></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Equipment Kit Barcode</Form.Label>
                                <Form.Control value={kitBarcode} onChange={e => setKitBarcode(e.target.value)} placeholder="Kit Barcode" required></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <hr/>
                        <Form.Group controlId="formBasicCheckbox">
                            <div className={"disclaimer"}>
                                <Badge variant="secondary">Disclaimer</Badge>
                                <p >
                                    The student listed is responsible for the safekeeping and prompt return of all items listed on this form as checked out. If one or more components, becomes damaged or lost, the student is responsible for providing a replacement. Please speak with your instructor on what items are suitable. Failure to return all required material by the return date listed on this form may result in but not limited to a failing grade of zero for this course, a hold on your student account, and any additional legal action Georgia State University may choose to pursue in accordance with the missing or damaged equipment.
                                </p>

                                <Form.Group>
                                    <Form.Check
                                        required
                                        label="Student Agrees To The Disclaimer"
                                        feedback="You must agree before submitting."
                                    />
                                </Form.Group>

                            </div>
                        </Form.Group>
                        <Button onClick={checkout} variant="danger">Checkout</Button>

                    </Form>
                </Col>
            </Row>
        </div>
    );
}