import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import Header from "./Header";
import './Playlists.css';
import { Container, Row, Col } from 'react-bootstrap';

const Playlists = () => {
    return (
        <>
            <Header />
            <Container>
                <Row id = 'playlist-row'>
                    <Col id = 'cols'>
                        <div>
                            <Link to={`/Playlists/Manage`}>
                                <img src="https://i.pinimg.com/736x/ff/e3/b8/ffe3b857b2755bc384ef4dcafc190e97.jpg" style={{ width: '20vw', height: '50vh', borderRadius: '10%', marginLeft:'-0.7vw' }} alt="Create playlist"></img>
                            </Link>
                        </div>
                        <br></br>
                        <div>
                            Manage Playlists
                        </div>
                    </Col>
                    <Col id = 'cols'>
                        <div>
                            <Link to={`/Playlists/Browse`}>
                                <img src="https://static.vecteezy.com/system/resources/previews/013/367/127/non_2x/bright-luminous-purple-medical-digital-medical-neon-sign-for-a-pharmacy-or-hospital-store-beautiful-shiny-with-a-magnifier-on-a-black-background-illustration-vector.jpg" style={{ width: '20vw', height: '50vh', borderRadius: '10%', marginLeft:'-0.7vw' }} alt="Browse playlists"></img>
                            </Link>
                        </div>
                        <br></br>
                        <div>
                            Browse Playlists
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Playlists;