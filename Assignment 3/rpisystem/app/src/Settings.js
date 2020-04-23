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
import Alert from "react-bootstrap/Alert";

export default function Settings(){
    const [semester_due_date, setDueDate] = useState("")
    const [superemail, setSuperEmail] = useState("")
    const[alert_message, setalert_message] = useState("")

    axios.get('/api/settings')
        .then(function (response) {
            response.data.forEach(setting => {
                setDueDate(setting.semester_due_date);
                setSuperEmail(setting.super_admin_email);
            })
        })
        .catch(function (err) {
            console.log(err);
            setalert_message("Issue with loading settings");
        })
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
    if((!localStorage.getItem('role'))  || (localStorage.getItem('role').toLowerCase() !== "superadmin")){
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
                                        You do not have <strong>"Network Admin"</strong> Level permission to view this page.
                                        <br/>Please log in to gain access.
                                    </p>
                                    <p>
                                        <Link to="/" >
                                            <Button variant="primary">Back To Home</Button>
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
        if(verifySettings()) {
            axios.put('/api/settings', {
                semester_due_date: semester_due_date,
                super_admin_email: superemail
            }).then(function (response) {
                setalert_message("Settings Successfully Saved!");
                })
        }
        else{
            console.log("Settings Information is invalid");
            setalert_message("Settings Information is invalid");
        }
    }
    function verifySettings(){
        if(!superemail.includes('@')){
            console.log("Invalid Email");
            setalert_message("Invalid Email");
            return false;
        }
        if(superemail === ""){
            console.log("Email cannot be empty");
            setalert_message("Email cannot be empty");
            return false;
        }
        if(semester_due_date === ""){
            console.log("Semester due date cannot be empty");
            setalert_message("Semester due date cannot be empty");
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
                    <h1>Site Settings</h1>
                    <Form>
                        <AlertDismissible variant={alert_message !== "Settings Successfully Saved!" ? 'danger' : 'success'} message={alert_message}/>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Return Date</Form.Label>
                                <Form.Control value={semester_due_date} onChange={e => setDueDate(e.target.value)} placeholder="Return Date"></Form.Control>
                            </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label>Network Admin Email</Form.Label>
                                <Form.Control value={superemail} onChange={e => setSuperEmail(e.target.value)} placeholder="Network Admin Email"></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button onClick={settingsUpdate} variant="secondary">Update Settings</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}