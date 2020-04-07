import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";
import BasicNavbar from "./Components/basic-navbar";

class Register extends Component{

    render(){
        return(
            <div>
                <BasicNavbar></BasicNavbar>
                <Container className="Login">
                    <Row>
                        <Col xs={2} className="left-sidebar"></Col>
                        <Col className="main">
                            <h1>Register</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Row>
                                        <Col>
                                            <Form.Label style={{fontSize:"20px"}}>First Name</Form.Label>
                                            <Form.Control autoFocus style={{fontSize:"15px"}} placeholder="First Name"></Form.Control>
                                        </Col>                                    
                                        <Col>
                                            <Form.Label style={{fontSize:"20px"}}>Last Name</Form.Label>
                                            <Form.Control style={{fontSize:"15px"}} placeholder="Last Name"></Form.Control>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
                                    <Form.Control style={{fontSize:"15px"}} type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
                                    <Form.Control style={{fontSize:"15px"}} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label style={{fontSize:"20px"}}>Re-Password</Form.Label>
                                    <Form.Control style={{fontSize:"15px"}} type="password" placeholder="Re-Password" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{fontSize:"20px"}}>PantherID</Form.Label>
                                    <Form.Control style={{fontSize:"15px"}} placeholder="Ex: 020258617"></Form.Control>
                                </Form.Group>
                                <Link className="loginLink" to="/login">Already have an account? Click here to login</Link>
                            </Form>
                            {/* <Link className="registerLink" to="/register">Don't have an account? Click here to register</Link> */}
                            <div className="text-center" style={{paddingTop:"10px"}}>
                                <Button style={{fontSize:"15px"}} variant="primary">Login</Button>
                            </div>
                        </Col>
                        <Col xs={2} className="right-sidebar"></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;
