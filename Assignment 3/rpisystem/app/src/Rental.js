import React, {useState} from 'react';
import { Row, Col, Table  } from 'react-bootstrap';
import './Equipment.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';

export default class Equipment extends React.Component{
    state = {
        table: []
    }
    componentDidMount() {
        const table = [];
        axios.get('/api/rental')
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
        return (
            <div>
                <BasicNavbar/>
                <Row className="inventory">
                    <BasicSideNav/>
                    <Col xs={9} className="column equipColumn">
                        <h1>Inventory | Equipment Status</h1>
                        <Table striped bordered hover responsive>
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
                                <td>{item.item_model}</td>
                                <td><Badge variant={item.condition.toLowerCase() === 'good' ? 'secondary' : 'danger'}>{item.condition}</Badge></td>
                                <td>{item.barcode}</td>
                                <td>{item.description}</td>
                                <td>{item.serial}</td>
                                    <th>#</th>
                                    <th>Checkin Date</th>
                                    <th>Checked In By</th>
                                    <th>Checked Out By</th>
                                    <th>Checkout Date</th>
                                    <th>Due Date</th>
                                    <th>Kit Barcode</th>
                                    <th>Panther ID</th>
                            </tr>)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

