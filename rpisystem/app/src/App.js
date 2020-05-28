import React from 'react';
import './App.css';
import BasicNavbar from './Components/basic-navbar';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useHistory} from 'react-router-dom';
import * as Icon from 'react-icons/fa';


export default function Application(){
    const history = useHistory();
    function logout(){
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("pantherId");
        localStorage.removeItem("role");
        history.push('/login');

    }


    if (!localStorage.getItem("firstName") && (history.location.pathname !== "/register" || history.location.pathname !== "/login")) {
        history.push('/login');
    }

    function CardLink(props) {

        return (
            <>
                <Link to={props.link} onClick={props.link === "#" ? logout : null}>
                <Card
                    bg={props.type}
                    text={props.type.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                >
                    <Card.Header>
                        {props.icon}
                        {props.title}
                    </Card.Header>
                </Card>
                <br />
                </Link>
            </>
        );
    }
/*
*  https://react-icons.netlify.app/#/icons/fa
*  Font Awesome Icons Can Be Found Here
*
*/
    return(
        <div>
            <BasicNavbar />
            <Container>
                <Row>
                    <Col></Col>

                    <CardColumns className={"column_stack"}>

                        <CardLink type={"dark"}         link={"/checkout"} title={"Checkout Raspberry Pi"}          icon=<Icon.FaRaspberryPi/> description={"description"}/>
                        <CardLink type={"secondary"}    link={"/rental-late"} title={"View Late Rentals"}              icon=<Icon.FaExclamationTriangle/> description={"description"}/>
                          {(localStorage.getItem('role')) && localStorage.getItem('role').toLowerCase() !== "superadmin"? <CardLink type={"secondary"}  link={"#"}  title={"Sign Out"}                icon={<Icon.FaPowerOff/>} description={"description"}/> : <CardLink type={"secondary"}    link={"/settings"} title={"System Settings"}                icon={<Icon.FaChalkboardTeacher/>} description={"description"}/>}


                       <CardLink type={"secondary"}    link={"/checkin"} title={"Return Raspberry Pi Rental"}     icon=<Icon.FaBoxOpen/> description={"description"}/>
                       <CardLink type={"secondary"}    link={"/equipment-damaged"} title={"View Broken Equipment"}          icon=<Icon.FaTools/> description={"description"}/>
                       <CardLink type={"info"}         link={"/message"} title={"Contact Network Admin"}          icon=<Icon.FaEnvelopeOpenText/> description={"description"}/>


                        <CardLink type={"secondary"}    link={"/rental"} title={"View Rentals"}       icon=<Icon.FaRegListAlt/> description={"description"}/>
                        <CardLink type={"secondary"}    link={"/account"} title={"Add New Student"}            icon=<Icon.FaUsersCog/> description={"description"}/>
                        <CardLink type={"danger"}       link={"/support"} title={"Get Technical Support"}          icon=<Icon.FaHeadset/> description={"description"}/>

                    </CardColumns>

                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}
