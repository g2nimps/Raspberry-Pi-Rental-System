import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";
import BasicNavbar from "./Components/basic-navbar";
import axios from 'axios';

export default function Register(){
    const[first_name, setFirst_name] = useState("");
    const[last_name, setLast_name] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[pantherId, setPantherId] = useState("");
    const[users, setUsers] = useState("");
    const history = useHistory();

    // will get users on initialization of page
    useEffect(() => {
        axios.get('/api/users')
            .then(res => {
                setUsers(res.data)
            })
    });

    function validateInfo(){
        console.log(users)
        if(first_name === ""){
            console.log("First name cannot be empty")
            return false
        }
        if(last_name === ""){
            console.log("Last name cannot be empty")
            return false
        }
        if(!email.includes('@')){
            console.log("Invalid Email")
            return false
        }

        for(var i = 0; i < users.length; i++){
            if(users[i].email === email){
                console.log("Email already in use")
                return false
            }
        }
        
        if(password.length < 8){
            console.log(password.length)
            console.log("Password does not meet length requirement")
            return false
        }
        if(!parseInt(pantherId)){
            console.log("PantherId must be a string of numbers")
            return false
        }
        return true
    }

    function register(){
        if(validateInfo()){
            axios.post('/api/users',{
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                pantherId: pantherId
            })
            .then(function(response){
                console.log(response)
                history.push("/login")
            })
            .catch(function(err){
               console.log(err)
            })
        }
        else{
            console.log("Something went wrong")
        }
    }

    return(
        <div>
            <BasicNavbar></BasicNavbar>
            <Container className="Login">
                <Row>
                    <Col xs={2} className="left-sidebar"></Col>
                    <Col className="main">
                        <h1>Register</h1>
                        <Form onSubmit={register} controlid="form">
                            <Form.Group>
                                <Form.Row>
                                    <Col>
                                        <Form.Label style={{fontSize:"20px"}}>First Name</Form.Label>
                                        <Form.Control value={first_name} onChange={e => setFirst_name(e.target.value)} autoFocus style={{fontSize:"15px"}} placeholder="First Name" required></Form.Control>
                                    </Col>                                    
                                    <Col>
                                        <Form.Label style={{fontSize:"20px"}}>Last Name</Form.Label>
                                        <Form.Control value={last_name} onChange={e => setLast_name(e.target.value)} style={{fontSize:"15px"}} placeholder="Last Name" required></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
                                <Form.Control value={email} onChange={e => setEmail(e.target.value)} style={{fontSize:"15px"}} type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
                                <Form.Control value={password} onChange={e => setPassword(e.target.value)} style={{fontSize:"15px"}} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{fontSize:"20px"}}>PantherID</Form.Label>
                                <Form.Control value={pantherId} onChange={e => setPantherId(e.target.value)} style={{fontSize:"15px"}} placeholder="Ex: 020258617" required></Form.Control>
                            </Form.Group>
                            <Link className="loginLink" to="/login">Already have an account? Click here to login</Link>
                        </Form>
                        <div className="text-center" style={{paddingTop:"10px"}}>
                            <Button onClick={register} style={{fontSize:"15px"}} variant="primary">Register</Button>
                        </div>
                    </Col>
                    <Col xs={2} className="right-sidebar"></Col>
                </Row>
            </Container>
    </div>
    );
}