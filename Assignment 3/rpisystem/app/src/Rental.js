import React, {useState} from 'react';
import { Row, Col, Table  } from 'react-bootstrap';
import './Equipment.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';

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
                            { this.state.table.map(item => <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.check_in_date}</td>
                                <td>{item.checkin_by}</td>
                                <td>{item.checkout_by}</td>
                                <td>{item.checkout_date}</td>
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

