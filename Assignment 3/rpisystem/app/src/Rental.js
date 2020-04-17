import React, {useState} from 'react';
import { Row, Col, Table  } from 'react-bootstrap';
import './Equipment.css';
import BasicSideNav from './Components/basic-sidenav';
import BasicNavbar from './Components/basic-navbar';
import axios from 'axios';

export default function Rental(){
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
                    <h1>Raspberry Pi Inventory</h1>
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
                        <tr>
                            <td>1</td>
                            <td>01/01/2020</td>
                            <td>Sam Woodruff</td>
                            <td>Julie Henderson</td>
                            <td>01/01/2020</td>
                            <td>01/01/2020</td>
                            <td>123123123</td>
                            <td>368282828</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>01/01/2020</td>
                            <td>Sam Woodruff</td>
                            <td>Julie Henderson</td>
                            <td>01/01/2020</td>
                            <td>01/01/2020</td>
                            <td>123123123</td>
                            <td>368282828</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>01/01/2020</td>
                            <td>Sam Woodruff</td>
                            <td>Julie Henderson</td>
                            <td>01/01/2020</td>
                            <td>01/01/2020</td>
                            <td>123123123</td>
                            <td>368282828</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>01/01/2020</td>
                            <td>Sam Woodruff</td>
                            <td>Julie Henderson</td>
                            <td>01/01/2020</td>
                            <td>01/01/2020</td>
                            <td>123123123</td>
                            <td>368282828</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>01/01/2020</td>
                            <td>Sam Woodruff</td>
                            <td>Julie Henderson</td>
                            <td>01/01/2020</td>
                            <td>01/01/2020</td>
                            <td>123123123</td>
                            <td>368282828</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>01/01/2020</td>
                            <td>Sam Woodruff</td>
                            <td>Julie Henderson</td>
                            <td>01/01/2020</td>
                            <td>01/01/2020</td>
                            <td>123123123</td>
                            <td>368282828</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}