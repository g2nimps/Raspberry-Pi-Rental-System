import React, {useState} from 'react';
import {Row, Col, Table, Container, Button} from 'react-bootstrap';
import './Equipment.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import { Link, useHistory, withRouter} from 'react-router-dom';
import * as Icon from 'react-icons/fa';
import Jumbotron from "react-bootstrap/Jumbotron";

class Rental extends React.Component{
    state = {
        table: []
    }
    location = useHistory.bind(this);
    componentWillReceiveProps(nextProps ) {
        const { location, history, match } = this.props;
        this.props.location.pathname = history.location.pathname;
        console.log(this.props.location.pathname);
    }

    componentDidMount() {
        axios.get('/api/rentals')
            .then((response) => {

                let table = response.data;
                console.log(table);
                if (this.props.location.pathname == "/rental-late") {
                    const lateRentals = [];
                    let today = new Date();
                    for(let i = 0; i < response.data.length; i++){
                        let due_date = new Date(response.data[i].due_date);
                        let checkin = new Date(response.data[i].check_in_date);
                        if (
                            ((due_date.getTime() < today.getTime()) && (response.data[i].check_in_date == null)) ||
                            (checkin.getTime() > due_date.getTime())
                        ){
                            //Rental is late if  (Check IN Date > Due Date) or (Check IN Date = NULL && Due_date < Today)
                            lateRentals.push(response.data[i]);
                        }
                    }
                    table = lateRentals;
                }

                //console.log(table);
                this.setState({table});

            })
            .catch(function(err){
                console.log(err);
            });

    }

    componentDidUpdate() {
        axios.get('/api/rentals')
            .then((response) => {

                let table = response.data;
                console.log(table);
                if (this.props.location.pathname == "/rental-late") {
                    const lateRentals = [];
                    let today = new Date();
                    for(let i = 0; i < response.data.length; i++){
                        let due_date = new Date(response.data[i].due_date);
                        let checkin = new Date(response.data[i].check_in_date);
                        if (
                            ((due_date.getTime() < today.getTime()) && (response.data[i].check_in_date == null)) ||
                            (checkin.getTime() > due_date.getTime())
                        ){
                            //Rental is late if  (Check IN Date > Due Date) or (Check IN Date = NULL && Due_date < Today)
                            lateRentals.push(response.data[i]);
                        }
                    }
                    table = lateRentals;
                }

                //console.log(table);
                this.setState({table});

            })
            .catch(function(err){
                console.log(err);
            });

    }

    render()
    {

        if(!localStorage.getItem('firstName')){
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
                                            You do not have permission to view this page.
                                            <br/>Please log in to gain access.
                                        </p>
                                        <p>
                                            <Link to="/login" >
                                                <Button variant="primary">Login To Portal</Button>
                                            </Link>
                                        </p>
                                    </Container>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        } else {
            return (
                <div>
                    <BasicNavbar/>
                    <Row className="inventory">
                        <BasicSideNav/>
                        <Col xs={9} className="column equipColumn">
                            <h1>Rentals | {this.props.location.pathname == "/rental-late" ? 'Late Raspberry Pi Checkouts' : 'All Raspberry Pi Checkouts'}</h1>
                            <Table striped bordered hover responsive variant="dark">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Checkin Date</th>
                                    <th>Checked In By</th>
                                    <th>Checked Out By</th>
                                    <th>Checkout Date</th>
                                    <th>Due Date</th>
                                    <th>Kit Barcode</th>
                                    <th>Panther ID</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.table.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><Badge variant={this.props.location.pathname == "/rental-late" ? 'danger' : 'light'}>{item.check_in_date}</Badge></td>
                                    <td>{item.checkin_by}</td>
                                    <td>{item.checkout_by}</td>
                                    <td><Badge variant="secondary">{item.checkout_date}</Badge></td>
                                    <td><Badge variant={this.props.location.pathname == "/rental-late" ? 'danger' : 'primary'}>{item.due_date}</Badge></td>
                                    <td>{item.kit_barcode}</td>
                                    <td>{item.student_panther_id}</td>
                                </tr>)}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default withRouter(Rental)
