
/*import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { MachineCollection } from '/imports/api/MachineCollection';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='info' variant='dark'>
                <container>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <header>
                            <Nav>
                                <h1>Management App</h1>
                                <Nav.Link href="#/"><Home></Home></Nav.Link>
                                <Nav.Link href="#Add machine">Add machine</Nav.Link>
                                <Nav.Link href="#/">Write Notizen</Nav.Link>
                                <Nav.Link href="#/">Aboutus</Nav.Link>

                            </Nav>
                        </header>
                    </Navbar.Collapse>
                </container>
            </Navbar>
        </>
    );
}





export default Navigation;