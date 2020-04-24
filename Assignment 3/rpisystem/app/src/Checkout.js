import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Equipment.css';
import './Checkout.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as Icon from 'react-icons/fa';
import Alert from "react-bootstrap/Alert";

export default function Checkout(){
    const [UpantherId, setUPantherId] = useState("");
    const [kitBarcode, setKitBarcode] = useState("");
    const [check, setCheck] = useState(false);
    const[alert_message, setalert_message] = useState("");

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

    function AlertDismissible(props) {
        if (props.message.length > 0) {
            return (
                <>
                    <Alert variant={props.variant}>
                        {props.message}
                    </Alert>
                </>
            );
        } else {
            return (
                <>
                </>
            );

        }
    }

    function checkout(){
        if(verifyRental()){
            axios.get('/api/rentals')
                .then(function (response) {
                    let check_code = true;
                    response.data.forEach(rental => {
                        if((rental.check_in_date === null) && (UpantherId === rental.student_panther_id)){
                            setalert_message("User " + UpantherId +" Already Checked Out RPI - Barcode: " + rental.kit_barcode);
                            check_code = false;
                        }
                    })
                    if (check_code === true) {
                        axios.get('/api/equipment')
                            .then(function (response) {
                                let barcode_check = false;
                                response.data.forEach(equipment => {
                                    if(Number(equipment.barcode) === Number(kitBarcode)){
                                        barcode_check = true;
                                    }
                                })
                                if(barcode_check === false){
                                    //console.log("Equipment Barcode entered is incorrect")
                                    setalert_message("RPI Equipment Barcode Does Not Exist");
                                } else {
                                    axios.post('/api/rentals', {
                                        student_panther_id: UpantherId,
                                        checkout_date: new Date(),
                                        check_in_date: "",
                                        due_date: localStorage.getItem('semester_due_date'),
                                        checkout_by: localStorage.getItem('pantherId'),
                                        checkin_by: "",
                                        kit_barcode: kitBarcode
                                    }).then(function (response) {
                                        setalert_message("RPI Checkout Successful!");
                                    }).catch(function (err) {
                                        console.log(err);
                                        setalert_message("Error with Checkout Submission");
                                    })

                                }

                            })
                            .catch(function (err) {
                                console.log(err);
                            })

                    }
                })
                .catch(function (err) {
                    console.log(err);
                });

        }
    }

    function verifyRental(){
        if(!parseInt(UpantherId)){
            //console.log("PantherId must be a string of numbers")
            setalert_message("PantherId must be a string of numbers");
            return false;

        }
        if(kitBarcode.length === 0 || kitBarcode === ""){
            //console.log("PantherId must be a string of numbers")
            setalert_message("Barcode cannot be empty");
            return false;
        }
        if (check === false) {
            //console.log("User Must Agree to Checkout Disclaimer")
            setalert_message("User Must Agree to Checkout Disclaimer");
            return false;
        }
        return true;
    }

    return(
        <div>
            <BasicNavbar />
            <Row className="inventory">
                <BasicSideNav />
                <Col xs={9} className="column equipColumn">
                    <h1>Checkout A Raspberry Pi</h1>
                    <Form className="checkout-form">
                        <AlertDismissible variant={alert_message !== "RPI Checkout Successful!" ? 'danger' : 'success'} message={alert_message}/>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Student PantherId</Form.Label>
                                <Form.Control value={UpantherId} onChange={e => setUPantherId(e.target.value)} placeholder="Student's PantherId" required></Form.Control>
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
                                        onChange={e => setCheck(e.target.value)}
                                        name={"disclaimer_check"}
                                        label="Student Agrees To The Disclaimer"
                                        feedback="You must agree before submitting."
                                    />
                                </Form.Group>

                            </div>
                        </Form.Group>
                        <Button onClick={checkout} variant="danger">Checkout RPI</Button>

                    </Form>
                </Col>
            </Row>
        </div>
    );
}