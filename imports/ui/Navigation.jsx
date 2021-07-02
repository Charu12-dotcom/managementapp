
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='info' variant='dark'>
                <container>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav>
                            <Nav.Link href="#/"><Home></Home></Nav.Link>
                            <Nav.Link href="#Add machine">Add machine</Nav.Link>
                            <Nav.Link href="#/">Write Notizen</Nav.Link>
                            <Nav.Link href="#/">Aboutus</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </container>
            </Navbar>
        </>
    );
}





export default Navigation;