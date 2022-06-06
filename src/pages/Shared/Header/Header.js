import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <header>
            <div className="container-fluid">
                <Navbar expand="lg" >
                    <Container>
                        <Navbar.Brand as={Link} to={'/'} className='fw-bold fs-4 text-black' style={{ color: "#1E0A3C" }}>Thepostman24</Navbar.Brand>
                        <input type="Search" className='form-control' style={{ height: "40px", width: "350px" }} placeholder="Search.." />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={CustomLink} to={'/'} className='me-3 '>Home</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/browse-events'} className='me-3 '>Browse Events</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/organize'} className=' me-3'>Organize</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/help'} className='me-3 '>Help</Nav.Link>
                                {user?.uid ?
                                    <Nav.Link as={Link} to={'#'} className='' onClick={handleSignOut}>Sign Out </Nav.Link>
                                    :
                                    <Nav.Link as={CustomLink} to={'/login'} className=''>Login</Nav.Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;