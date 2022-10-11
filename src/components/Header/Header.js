import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            {/* -------------------- */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="#home">Navbar</Navbar.Brand>
                    <Nav>
                        <Nav.Link to="#home">Home</Nav.Link>
                        <Nav.Link to="#features">Features</Nav.Link>
                        <Nav.Link to="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* ---------------- */}

        </div>
    );
};

export default Header;