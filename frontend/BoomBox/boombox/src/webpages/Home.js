import Header from "./Header.js";
import Slider from "./Slider.js";
import './Home.css';
import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const [selectedContent, setSelectedContent] = useState('');
    const [containerAnimation, setContainerAnimation] = useState(false);
  
    const handleClick = (content) => {
      setSelectedContent(content);
      setContainerAnimation(true); // Trigger animation when a button is clicked
      setTimeout(() => setContainerAnimation(false), 300); // Reset animation after 300ms
    };
  
    return (
      <>
        <Header/>
        <Slider/>
        <div id="btn-ctr">
          <button className="button" onClick={() => handleClick('top_artists')}>Top Artists</button>
          <button className="button" onClick={() => handleClick('trending_tracks')}>Trending Tracks</button>
        </div>
        <div className={`container ${selectedContent ? 'selected' : ''} ${containerAnimation ? 'animate' : ''}`}>
          {selectedContent === 'top_artists' && (
            <>
                <Row>
                {[...Array(5)].map((_, index) => (
                    <Col key={index}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg/220px-Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg" alt="Description of the image" style={{ width: '100%', height: 'auto', borderRadius:'50%'}}/></Col>
                ))}
                </Row>
                <Row>
                {[...Array(5)].map((_, index) => (
                  <Col className="textBox">Travis Scott</Col>
                ))}
              </Row>
            </>
          )}
          {selectedContent === 'trending_tracks' && (
            <>
                <div id="topSongs">
                <Row>
                    {[...Array(5)].map((_, index) => (
                    <Col key={index}><img src="https://upload.wikimedia.org/wikipedia/en/2/23/Travis_Scott_-_Utopia.png" alt="Description of the image" style={{ width: '100%', height: 'auto' } }/></Col>
                    ))}
                </Row>
                <Row>
                    {[...Array(5)].map((_, index) => (
                    <Col className="textBox">My Eyes</Col>
                    ))}
                </Row>
                </div>
            </>
          )}
        </div>
      </>
    );
  };
  
  export default Home;