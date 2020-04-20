import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import BasicNavbar from "./Components/basic-navbar";
import axios from 'axios';
import Notifications from './Components/notifications';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function login(){
        axios.get('/api/users')
            .then(function(response){
                response.data.forEach(user => {
                    if(email === user.email && password === user.password){
                        localStorage.setItem('firstName', user.first_name)
                        localStorage.setItem('lastName', user.last_name)
                        history.push("/");
                    }
                })
                Notifications.loginSuccessful();
            })
            .catch(function(err){
                console.log(err)
            })
    }

    function verifyCredentials(){

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