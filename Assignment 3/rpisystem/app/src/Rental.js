import React, {useState} from 'react';
import {Row, Col, Table, Container, Button} from 'react-bootstrap';
import './Equipment.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import * as Icon from 'react-icons/fa';
import Jumbotron from "react-bootstrap/Jumbotron";

export default class Rental extends React.Component{
    state = {
        table: []
    }
    componentDidMount() {
        const table = [];
        axios.get('/api/rentals')
            .then((response) => {

                const table = response.data;
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
                            <h1>Rentals | Checked Out Raspberry Pis</h1>
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
                                    <td><Badge variant="light">{item.check_in_date}</Badge></td>
                                    <td>{item.checkin_by}</td>
                                    <td>{item.checkout_by}</td>
                                    <td><Badge variant="secondary">{item.checkout_date}</Badge></td>
                                    <td><Badge variant="primary">{item.due_date}</Badge></td>
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

