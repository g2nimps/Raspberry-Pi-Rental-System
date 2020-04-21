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


export default class Equipment extends React.Component{


    state = {
        table: []
    }
    componentDidMount() {
        const table = [];
        axios.get('/api/equipment')
            .then((response) => {

                const table = response.data;
                console.log(table);
                this.setState({table});

            })
            .catch(function(err){
                console.log(err);
            })

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
                            <h1>Inventory | Equipment Status</h1>
                            <Table striped bordered hover responsive className={"light_table"}>
                                <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>Status</th>
                                    <th>Kit Barcode</th>
                                    <th>Description</th>
                                    <th>Serial</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.table.map(item => <tr key={item.id}>
                                    <td><strong>{item.item_model}</strong></td>
                                    <td><Badge
                                        variant={item.condition.toLowerCase() === 'good' ? 'secondary' : 'danger'}>{item.condition}</Badge>
                                    </td>
                                    <td>{item.barcode}</td>
                                    <td>{item.description}</td>
                                    <td>{item.serial}</td>
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