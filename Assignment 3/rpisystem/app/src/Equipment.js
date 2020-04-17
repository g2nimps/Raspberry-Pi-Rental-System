import React, {useState} from 'react';
import { Row, Col, Table  } from 'react-bootstrap';
import './Equipment.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';

export default function Equipment(){
    // const[table, setTable] = useState("");

    function createTable(){
        let table = []

        axios.get('/api/rentals')
            .then(function(response){
                for(let i = 0; i < response.data; i++){
                    let children = []
                    for(let j = 0; response.data[i]; j++){
                        children.push(<td>{`Column ${j + 1}`}</td>)
                    }
                    table.push(<tr>{children}</tr>)
                }
                return table
            })
            .catch(function(err){
                console.log(err)
            })
    }

    if(!localStorage.getItem('firstName')){
        return(
            <div>
                <BasicNavbar />
                <h1>Please log in to use Equipment Page.</h1>
            </div>
        );
    }

    return(
        <div>
            <BasicNavbar />
            <Row className="inventory">
                <BasicSideNav />
                <Col xs={9} className="column equipColumn">
                    <h1>Equipment List</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            <th>Model</th>
                            <th>Status</th>
                            <th>Barcode</th>
                            <th>Description</th>
                            <th>Serial</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>RPI_001</td>
                            <td><Badge variant="dark">Good</Badge></td>
                            <td>00000000</td>
                            <td>Raspberry Pi 3 Kit</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>RPI_002</td>
                            <td><Badge variant="dark">Good</Badge></td>
                            <td>00000000</td>
                            <td>Raspberry Pi 3 Kit</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>RPI_003</td>
                            <td><Badge variant="dark">Good</Badge></td>
                            <td>00000000</td>
                            <td>Raspberry Pi 3 Kit</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>RPI_004</td>
                            <td><Badge variant="danger">Damaged</Badge></td>
                            <td>00000000</td>
                            <td>Raspberry Pi 3 Kit</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>RPI_005</td>
                            <td><Badge variant="dark">Good</Badge></td>
                            <td>00000000</td>
                            <td>Raspberry Pi 3 Kit</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>RPI_006</td>
                            <td><Badge variant="danger">Damaged</Badge></td>
                            <td>00000000</td>
                            <td>Raspberry Pi 3 Kit</td>
                            <td>1234567</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );    
}