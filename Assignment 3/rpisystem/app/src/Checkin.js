import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import './Equipment.css';
import './Checkin.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';
import Badge from "react-bootstrap/Badge";
import { Link } from 'react-router-dom';
import * as Icon from 'react-icons/fa';
import Jumbotron from "react-bootstrap/Jumbotron";
import Alert from "react-bootstrap/Alert";

export default function Checkin(){
    const [pantherId, setPantherId] = useState("")
    const [kitBarcode, setKitBarcode] = useState("")
    const [alert_message, setalert_message] = useState("")
    const [isbroken, setBroken] = useState(false)

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
    function checkin(){
        let rentalCheckIn = {};
        axios.get('/api/rentals')
            .then(res => {
                let rentals = res.data;
                for(let i = 0; i < rentals.length; i++){
                    // console.log(rentals[i])
                    //console.log(kitBarcode + " vs " + rentals[i].kit_barcode)
                    // console.log(pantherId + " vs " + rentals[i].student_panther_id)
                    if(Number(rentals[i].student_panther_id) === Number(pantherId) && rentals[i].kit_barcode === kitBarcode){
                        //console.log("should return true")
                        //console.log( rentals[i]);
                        rentalCheckIn = rentals[i];
                    }
                }
                if (Object.keys(rentalCheckIn).length > 0) {
                    //console.log("match was found")
                    //console.log(rentalCheckIn)
                    axios.put('api/rentals/' + rentalCheckIn.id, {
                        id: Number(rentalCheckIn.id),
                        student_panther_id: pantherId,
                        kit_barcode: kitBarcode,
                        checkin_by: localStorage.getItem("pantherId"),
                        checkout_by: rentalCheckIn.checkout_by,
                        checkoutDate: rentalCheckIn.checkoutDate,
                        checkInDate: new Date(),
                        rentalId: rentalCheckIn.rentalId,
                        due_date: rentalCheckIn.due_date
                    }).then(function (response) {


                        if (isbroken === false ) {
                            //console.log('success')
                            setalert_message("RPI Return Successful!");
                        } else {
                        // Update Status
                           // console.log("Updating Equipment List with Broken Item")


                            axios.get('api/equipment')
                                .then((response) => {
                                    let equip_kit =  {};
                                        for(let i = 0; i < response.data.length; i++){
                                            if (response.data[i].barcode === kitBarcode){
                                                //If equipment is late add to list
                                                equip_kit = response.data[i];
                                            }
                                        }
                                        console.log("equip_kit")
                                        console.log(equip_kit)
                                        // Create a PUT for updating value

                                    axios.put('api/equipment/' + equip_kit.id, {
                                        id: equip_kit.id,
                                        item_model: equip_kit.item_model,
                                        description: equip_kit.description,
                                        serial: equip_kit.serial,
                                        condition: "DAMAGED",
                                        barcode: equip_kit.barcode
                                    }).then(function (response) {

                                        //console.log('success + broken information stored')
                                        setalert_message("RPI Return Completed | Status Updated To DAMAGED");
                                    }).catch(function(err){
                                        console.log(err);
                                        setalert_message("Return Completed, But Error with RPI Condition Update");
                                    })

                                }).catch(function(err){
                                    console.log(err);
                                    setalert_message("Return Completed, But Error with RPI Condition Retrieval");
                                })

                            setalert_message("RPI Returned, With RPI Status Updated as Broken!");
                        }


                    }).catch(function (err) {
                        console.log(err);
                        setalert_message("Error with RPI Return Submission");
                    })
                } else {
                    setalert_message("Error: No Rental Found for Student/ RPI Barcode Pairing");

                }
            })

    }

    return(
        <div>
            <BasicNavbar />
            <Row className="inventory">
                <BasicSideNav />
                <Col xs={9} className="column equipColumn">
                    <h1>Return Raspberry Pi Rental</h1>
                    <Form>
                        <AlertDismissible variant={(alert_message !== "RPI Return Successful!") && (alert_message !== "RPI Return Completed | Status Updated To DAMAGED") ? 'danger' : 'success'} message={alert_message}/>

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
                                                onChange={e => setBroken(e.target.value)}
                                        label="Returned Kit is Incomplete/RPI Broken"
                                    />
                                </Form.Group>

                            </div>
                        </Form.Group>
                        <Button onClick={checkin} variant="secondary">Return RPI</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}