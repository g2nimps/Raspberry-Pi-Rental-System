import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link, Route, withRouter, Switch } from "react-router-dom";
import "./Login.css";
import BasicNavbar from "./Components/basic-navbar";

class Login extends Component{
    render(){
        return (
            <div>
                <BasicNavbar></BasicNavbar>
                <Container className="Login">
                    <Row>
                        <Col xs={2} className="left-sidebar"></Col>
                        <Col className="main">
                            <h1>Login</h1>
                            <Form>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
                                    <Form.Control style={{fontSize:"15px"}} autoFocus type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
                                    <Form.Control style={{fontSize:"15px"}} type="password" placeholder="Password" />
                                </Form.Group>
                                <Link className="registerLink" to="/register">Don't have an account? Click here to register</Link>
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

export default Login;