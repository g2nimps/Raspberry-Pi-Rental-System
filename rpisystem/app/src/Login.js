import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import BasicNavbar from "./Components/basic-navbar";
import axios from 'axios';
import Alert from "react-bootstrap/Alert";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert_message, setalert_message] = useState("");
    const history = useHistory();

    function login(){

        if(verifyCredentials()) {
            axios.get('/api/users')
                .then(function (response) {
                    response.data.forEach(user => {
                        if (email === user.email && password === user.password) {
                            localStorage.setItem('firstName', user.first_name)
                            localStorage.setItem('lastName', user.last_name)
                            localStorage.setItem('pantherId', user.pantherId)
                            localStorage.setItem('role', user.role);

                            axios.get('/api/settings')
                                .then(function (response) {
                                    response.data.forEach(setting => {
                                        localStorage.setItem('semester_due_date', setting.semester_due_date);
                                        localStorage.setItem('super_admin_email', setting.super_admin_email);
                                    })
                                })
                                .catch(function (err) {
                                    console.log(err);
                                })
                            setalert_message("Login Successful! Redirecting...");
                            history.push("/");
                        } else {
                            setalert_message("The email / password you entered is incorrect.");
                        }
                    })
                    //Notifications.loginSuccessful();
                })
                .catch(function (err) {
                    console.log(err);
                    setalert_message("Issue with Login");
                })
        }
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
    function verifyCredentials(){
        if(!email.includes('@')){
            //console.log("Invalid Email");
            setalert_message("Invalid Email");
            return false;
        }
        if(email === ""){
            //console.log("Email cannot be empty");
            setalert_message("Email cannot be empty");
            return false;
        }
        if(password === ""){
            //console.log("Password cannot be empty");
            setalert_message("Password cannot be empty");
            return false;
        }
        return true;
    }

    return (
        <div>
            <BasicNavbar></BasicNavbar>
            <Container className="Login">
                <Row>
                    <Col xs={2} className="left-sidebar"></Col>
                    <Col className="main">
                        <h1>Login</h1>
                        <Form onSubmit={login}>
                            <AlertDismissible variant={alert_message !== "Login Successful! Redirecting..." ? 'danger' : 'success'} message={alert_message}/>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
                                {/* <Form.Control ref={this.email} onChange={() => this.handleChangeEmail()} style={{fontSize:"15px"}} autoFocus type="email" placeholder="Enter email" /> */}
                                <Form.Control value={email} onChange={e => setEmail(e.target.value)} style={{fontSize:"15px"}} autoFocus type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
                                {/* <Form.Control ref={this.password} onChange={() => this.handleChangePassword()} style={{fontSize:"15px"}} type="password" placeholder="Password" /> */}
                                <Form.Control value={password} onChange={e => setPassword(e.target.value)} style={{fontSize:"15px"}} type="password" placeholder="Password" />
                            </Form.Group>
                            <Link className="registerLink" to="/register">Don't have an account? Click here to register</Link>
                        </Form>
                        <div className="text-center" style={{paddingTop:"10px"}}>
                            <Button onClick={login} style={{fontSize:"15px"}} variant="primary">Login</Button>
                        </div>
                    </Col>
                    <Col xs={2} className="right-sidebar"></Col>
                </Row>
            </Container>
        </div>
    );
}