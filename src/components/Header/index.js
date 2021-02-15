import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './style.css';

function Header() {
    return (
        <div>
            <Jumbotron fluid className='jumbotron'>
                <Container>
                    <h1 className='title'>Enxhi's Portfolio</h1>
                    <p className='subtitle'>This is my react portfolio.</p>
                </Container>
                
            </Jumbotron>
        </div>
    )
}

export default Header;
