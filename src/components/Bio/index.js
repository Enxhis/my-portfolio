import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import image from './profile-img.jpg'

function Bio() {
    return (
        <div className="card-div">
            <Card className="card-container">
                <Card.Img variant="top" src={image} alt='profile image'/>
                <Card.Body>
                    <Card.Title className="card-title">Short Bio</Card.Title>
                    <Card.Text className="cart-text">
                        My name is Enxhi Salaj. I know a lot of people experience difficulties with my name,
                        but it is pronounced as Angie. I am currently based in Sterling Heights Michigan
                        where I am learning full-stack web development through Michigan State University
                        and taking college classes at Macomb Community College.
                        </Card.Text>
                    <Card.Text className="cart-text">
                        I am graduated from the University of Oslo in Norway with a Bachelor of Science in Informatics in December 2019.
                        I can program in Python, Java, Lisp, and JavaScript,
                        and I have a good knowledge of SQL, and MongoDB.
                        My hobbies? Besides staying in front of the screen,
                        I love sports and walking. I can paint and draw as I have taken classes in figurative arts for 9 years.
                        I enjoy reading philosophy. My mother language is Albanian,
                        but I am fluent in other languages like English, Norwegian, Swedish, Italian,
                        and some French too.
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Bio;
