import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './Equipment.css';
import './Checkin.css';
import './Settings.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';
import Alert from "react-bootstrap/Alert";

export default function AddKit(){
    const [barcode, setBarcode] = useState("");
    const [description, setDescription] = useState("");
    const [item_model, setItemModel] = useState("");
    const [serial, setSerial] = useState("");
    const [condition, setCondition] = useState("");
    const[alert_message, setalert_message] = useState("");

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

    function verifyAdd() {
        if (barcode === "") {
            setalert_message("Barcode cannot be empty");
            return false
        }
        if (description === "") {
            setalert_message("Item Name cannot be empty");
            return false
        }
        if (item_model === "") {
            setalert_message("Item Model cannot be empty");
            return false
        }
        if (serial === "") {
            setalert_message("Serial No. cannot be empty");
            return false
        }
        if (condition === "" || (condition !== "GOOD" && condition !== "DAMAGED")) {
            setalert_message("Condition cannot be empty");
            return false
        }
        return true;
    }

    function addUnit(){
    if (verifyAdd()) {
        axios.post('/api/equipment', {
            barcode: barcode,
            description: description,
            item_model: item_model,
            serial: serial,
            condition: condition
        })
            .then(function (response) {
                //console.log(response);
                setalert_message("New Kit Successfully Added!");
            })
            .catch(function (err) {
                console.log(err);
                setalert_message("Issue with submission - Barcode should be unique");
            })
        }
    }

    return(
        <div>
            <BasicNavbar />
            <Row className="inventory">
                <BasicSideNav />
                <Col xs={9} className="column equipColumn">
                    <h1>Add New RPI Kit</h1>
                    <Form>
                        <AlertDismissible variant={alert_message !== "New Kit Successfully Added!" ? 'danger' : 'success'} message={alert_message}/>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Item Model</Form.Label>
                                <Form.Control placeholder={"RPI_001"} onChange={e => setItemModel(e.target.value)} required></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control placeholder={"Raspberry Pi Kit 3"} onChange={e => setDescription(e.target.value)} required></Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Barcode</Form.Label>
                                <Form.Control placeholder={"0123401234"} onChange={e => setBarcode(e.target.value)} required></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Serial No.</Form.Label>
                                <Form.Control placeholder={"0213456789"} onChange={e => setSerial(e.target.value)} required></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState" required>
                                <Form.Label>Condition</Form.Label>
                                <Form.Control onChange={e => setCondition(e.target.value)} as="select">
                                    <option>Select Condition...</option>
                                    <option>GOOD</option>
                                    <option>DAMAGED</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Button onClick={addUnit} variant="info">Add New Kit</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}