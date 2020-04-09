import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link, Route, withRouter, Switch } from "react-router-dom";
import "./Login.css";
import BasicNavbar from "./Components/basic-navbar";
import axios from 'axios';

class Login extends Component{

    state = {
        email: "",
        password: ""
    }

    constructor(props){
        super(props)
        this.email = React.createRef();
        this.password = React.createRef();
        this.login = this.login.bind(this);
    }

    handleChangeEmail = event => {
        this.setState({email:this.email.current.value})
    }

    handleChangePassword = event => {
        this.setState({password:this.password.current.value})
    }

    async login(event){
        var users = []
        axios.get('/api/users')
            .then(function(response){
                users = response.data
                console.log(response)
            })
            .catch(function(err){
                console.log(err)
            })
    }
    render(){
        return (
            <div>
                <BasicNavbar></BasicNavbar>
                <Container className="Login">
                    <Row>
                        <Col xs={2} className="left-sidebar"></Col>
                        <Col className="main">
                            <h1>Login</h1>
                            <Form onSubmit={(e) => this.login(e)}>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
                                    <Form.Control ref={this.email} onChange={() => this.handleChangeEmail()} style={{fontSize:"15px"}} autoFocus type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
                                    <Form.Control ref={this.password} onChange={() => this.handleChangePassword()} style={{fontSize:"15px"}} type="password" placeholder="Password" />
                                </Form.Group>
                                <Link className="registerLink" to="/register">Don't have an account? Click here to register</Link>
                            </Form>
                            <div className="text-center" style={{paddingTop:"10px"}}>
                                <Button onClick={this.login} style={{fontSize:"15px"}} variant="primary">Login</Button>
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