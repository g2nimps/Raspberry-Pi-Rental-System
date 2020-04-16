import React, { useState } from 'react';
import './App.css';
import BasicNavbar from './Components/basic-navbar';
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Application(){
    function CardLink(props) {
 return (
     <>
         <Link to={props.link} >
         <Card
             bg={props.type}
             text={props.type.toLowerCase() === 'light' ? 'dark' : 'white'}
             style={{ width: '18rem' }}
         >
             <Card.Header>{props.title}</Card.Header>
             <Card.Body>
                 {props.icon}
                 <Card.Text>
                     {props.description}
                 </Card.Text>
             </Card.Body>
         </Card>
         <br />
         </Link>
     </>
 );
    }

    return(
        <div>
            <BasicNavbar />
            <Container>
                <Row col={9}>
                    <CardColumns>
                        <CardLink type={"secondary"} link={"dark"} title={"ah yeah"} icon={"icon"} description={"description"}/>
                        <CardLink type={"secondary"} link={"dark"} title={"ah yeah"} icon={"icon"} description={"description"}/>
                        <CardLink type={"secondary"} link={"dark"} title={"ah yeah"} icon={"icon"} description={"description"}/>
                        <CardLink type={"secondary"} link={"dark"} title={"ah yeah"} icon={"icon"} description={"description"}/>
                        <CardLink type={"secondary"} link={"dark"} title={"ah yeah"} icon={"icon"} description={"description"}/>
                        <CardLink type={"secondary"} link={"dark"} title={"ah yeah"} icon={"icon"} description={"description"}/>
                        <CardLink type={"secondary"} link={"dark"} title={"ah yeah"} icon={"icon"} description={"description"}/>
                        <CardLink type={"secondary"} link={"dark"} title={"ah yeah"} icon={"icon"} description={"description"}/>
                    </CardColumns>
                </Row>
            </Container>
        </div>
    );
}
