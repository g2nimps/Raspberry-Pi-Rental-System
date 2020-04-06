import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";
import "./Login.css";


function validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
}

function handleSubmit(event) {
    event.preventDefault();
}

class Login extends Component{
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    state = {email:String , password:String};
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    render(){
        return (
            <Container className="Login" fluid>
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            onChange={e => this.state.email = e.target.value}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            onChange={e => this.state.password = e.target.value}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!validateForm()}>
                        Login
                    </Button>
                </form>
            </Container>
        );
    }
}

export default Login;
// export default function Login(userData){
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//     }

//     return(
//         <Container fluid>
//             <form>
//                 <FormGroup controlId="email" bsSize="large">
//                     <ControlLabel>Email</ControlLabel>
//                     <FormControl
//                         autoFocus
//                         type="email"
//                         value={{email}}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                 </FormGroup>
//                 <FormGroup controlId="password" bsSize="large">
//                     <ControlLabel>Password</ControlLabel>
//                     <FormControl
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         type="password"
//                     />
//                 </FormGroup>
//                 <Button block bsSize="large" disabled={!validateForm()}>
//                     Login
//                 </Button>
//             </form>
//         </Container>
//     );
// }