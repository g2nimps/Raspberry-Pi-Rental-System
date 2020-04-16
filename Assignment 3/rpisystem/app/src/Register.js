import React, { useState } from "react";
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
    const[validated, setValidated] = useState("");
    const[validEmail, setValidEmail] = useState("");
    const history = useHistory();

    function validateEmail(){
        console.log("validateEmail")
        axios.get("/api/users")
            .then(function(response){
                let data = response.data
                for(let i = 0; i < data.length; i++){
                    if(data[i].email === email){
                        console.log("false")
                        return false
                    }
                }
                (console.log("true"))
                return true
            })
            .catch(function(err){
                console.log(err)
            })
    }

    function validateInfo(){
        setValidEmail(validateEmail())

        if(first_name === ""){
            console.log("First name cannot be empty")
            setValidated(false)
            return validated
        }
        if(last_name === ""){
            console.log("Last name cannot be empty")
            setValidated(false)
            return validated
        }
        if(!email.includes('@')){
            console.log("Invalid Email")
            setValidated(false)
            return validated
        }

        if(!validEmail){
            console.log("Email is already used")
            setValidated(false)
            return validated
        }
        
        if(password.length < 8){
            console.log("Password does not meet length requirement")
            setValidated(false)
            return validated
        }
        if(!parseInt(pantherId)){
            console.log("PantherId must be a string of numbers")
            setValidated(false)
            return validated
        }

        return validated
    }

    function register(){
        var postUser = validateInfo()
        // console.log(postUser)
        if(postUser){
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
                        {/* <Link className="registerLink" to="/register">Don't have an account? Click here to register</Link> */}
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

// class Register extends Component{

//     url = 'localhost:8080/api/users';
//     state = {
//         first_name: '',
//         last_name: '',
//         email: '',
//         password: '',
//         pantherId: 0
//     }

//     constructor(props) {
//         super(props);
//         // this.state = {first_name:"", last_name:"", email:"", password:"", pantherId:"", isLoading: true};
//         this.first_name = React.createRef();
//         this.last_name = React.createRef();
//         this.email = React.createRef();
//         this.password = React.createRef();
//         this.pantherId = React.createRef();
//         // very important apparently
//         this.submitUser = this.submitUser.bind(this)

//     }

//     handleChangeFirstName = event => { this.setState({first_name: this.first_name.current.value}); }
//     handleChangeLastName = event =>{ this.setState({last_name: this.last_name.current.value}); }
//     handleChangeEmail = event =>{ this.setState({email: this.email.current.value}); }
//     handleChangePassword = event =>{ this.setState({password: this.password.current.value}); }
//     handleChangePantherId = event =>{ this.setState({pantherId: this.pantherId.current.value}); }

//     async submitUser(event) {
//         console.log(this.state)

//         axios.post('/api/users', {
//             first_name: this.state.first_name,
//             last_name: this.state.last_name,
//             email: this.state.email,
//             password: this.state.password,
//             pantherId: parseInt(this.state.pantherId)
//         })
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//         console.log(error);
//         });
//     }

//     // handleSubmit(event){
//     //     this.setState(this.first_name)
//     // }

//     render(){
//         return(
//             <div>
//                 <BasicNavbar></BasicNavbar>
//                 <Container className="Login">
//                     <Row>
//                         <Col xs={2} className="left-sidebar"></Col>
//                         <Col className="main">
//                             <h1>Register</h1>
//                             <Form onSubmit={(e) => this.submitUser(e)} controlid="form">
//                                 <Form.Group>
//                                     <Form.Row>
//                                         <Col>
//                                             <Form.Label style={{fontSize:"20px"}}>First Name</Form.Label>
//                                             <Form.Control ref={this.first_name} onChange={() => this.handleChangeFirstName()} autoFocus style={{fontSize:"15px"}} placeholder="First Name" required></Form.Control>
//                                         </Col>                                    
//                                         <Col>
//                                             <Form.Label style={{fontSize:"20px"}}>Last Name</Form.Label>
//                                             <Form.Control ref={this.last_name} onChange={() => this.handleChangeLastName()} style={{fontSize:"15px"}} placeholder="Last Name" required></Form.Control>
//                                         </Col>
//                                     </Form.Row>
//                                 </Form.Group>
//                                 <Form.Group controlId="formGroupEmail">
//                                     <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
//                                     <Form.Control ref={this.email} onChange={() => this.handleChangeEmail()} style={{fontSize:"15px"}} type="email" placeholder="Enter email" required />
//                                 </Form.Group>
//                                 <Form.Group controlId="formGroupPassword">
//                                     <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
//                                     <Form.Control ref={this.password} onChange={() => this.handleChangePassword()} style={{fontSize:"15px"}} type="password" placeholder="Password" required />
//                                 </Form.Group>
//                                 {/* <Form.Group controlId="formGroupPassword">
//                                     <Form.Label style={{fontSize:"20px"}}>Re-enter Password</Form.Label>
//                                     <Form.Control style={{fontSize:"15px"}} type="password" placeholder="Re-Password" />
//                                 </Form.Group> */}
//                                 <Form.Group>
//                                     <Form.Label style={{fontSize:"20px"}}>PantherID</Form.Label>
//                                     <Form.Control ref={this.pantherId} onChange={() => this.handleChangePantherId()} style={{fontSize:"15px"}} placeholder="Ex: 020258617" required></Form.Control>
//                                 </Form.Group>
//                                 <Link className="loginLink" to="/login">Already have an account? Click here to login</Link>
//                             </Form>
//                             {/* <Link className="registerLink" to="/register">Don't have an account? Click here to register</Link> */}
//                             <div className="text-center" style={{paddingTop:"10px"}}>
//                                 <Button onClick={this.submitUser} style={{fontSize:"15px"}} variant="primary">Register</Button>
//                             </div>
//                         </Col>
//                         <Col xs={2} className="right-sidebar"></Col>
//                     </Row>
//                 </Container>
//             </div>
//         );
//     }
// }

// export default Register;
