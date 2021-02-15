import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Enxhi's Portfolio</h1>
                    <p>
                        This is my react portfolio.</p>
                </Container>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/Home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Jumbotron>
        </div>
    )
}

export default Header;
