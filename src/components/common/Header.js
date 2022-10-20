import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Categoryes from './Categoryes';
import Image from 'react-bootstrap/Image';
import { FaUserAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='mb-4'>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/'>My News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All Categories</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        {
                            user?.uid ?
                                <Nav>
                                    <Nav.Link>Howdy, {user?.displayName}</Nav.Link>
                                    <Nav.Link eventKey={2}>
                                        {
                                            user?.photoURL ?
                                                <Image roundedCircle style={{ width: '30px' }} src={user.photoURL}></Image>
                                                :
                                                <FaUserAlt />

                                        }
                                    </Nav.Link>
                                    <Nav.Link onClick={logOut}><Button variant="outline-info">Log Out</Button></Nav.Link>
                                </Nav>
                                :
                                <>
                                    <Link className='me-4' to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }
                        <div className='d-md-none'>
                            <Categoryes></Categoryes>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;