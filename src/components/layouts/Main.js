import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Categoryes from '../common/Categoryes';
import Footer from '../common/Footer';
import Header from '../common/Header';
import RightSidebar from '../common/RightSidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md="2 d-none d-md-block"><Categoryes></Categoryes></Col>
                    <Col md="7"><Outlet></Outlet></Col>
                    <Col md="3"><RightSidebar></RightSidebar></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;