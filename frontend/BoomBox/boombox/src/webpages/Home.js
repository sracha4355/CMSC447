import Header from "./Header.js";
import Slider from "./Slider.js";
import './Home.css';
import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {


    const [selectedContent, setSelectedContent] = useState('');
    const [containerAnimation, setContainerAnimation] = useState(false);

    const artistImages = ['https://charts-static.billboard.com/img/2006/12/taylor-swift-9sy-artistchart-ko8-180x180.jpg'
    ,'https://charts-static.billboard.com/img/2018/01/morgan-wallen-dqx-artistchart-932-180x180.jpg'
    ,'https://charts-static.billboard.com/img/2009/04/drake-04g-180x180.jpg'
    ,'https://charts-static.billboard.com/img/2017/07/sza-xyh-artistchart-ybr-180x180.jpg'
    ,'https://charts-static.billboard.com/img/2017/03/luke-combs-9dm-artist-chart-501-180x180.jpg']
    
    const artistNames = [
      'Taylor Swift',
      'Morgan Wallen',
      'Drake',
      'SZA',
      'Luke Combs'
    ]

    const trackImages =  [
      'https://charts-static.billboard.com/img/2024/04/taylor-swift-9sy-fortnight-2wg-180x180.jpg',
      'https://charts-static.billboard.com/img/2006/07/taylor-swift-9sy-180x180.jpg',
      'https://charts-static.billboard.com/img/2006/07/taylor-swift-9sy-180x180.jpg',
      'https://charts-static.billboard.com/img/2006/07/taylor-swift-9sy-180x180.jpg',
      'https://charts-static.billboard.com/img/2006/07/taylor-swift-9sy-180x180.jpg'
    ]

    const trackNames = [
      'Fortnight',
      'Down Bad',
      'I Can Do It With A Broken Heart',
      'The Tortured Poets Department',
      'So Long, London'
    ]


  
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
          <button  style = {{position:'absolute', left:'50%'}} className="button" onClick={() => handleClick('top_artists') }>Top Artists</button>
          <button  style = {{position:'absolute', left:'30%'}} className="button" onClick={() => handleClick('trending_tracks')}>Trending Tracks</button>
        </div>
        <div style = {{position:'absolute', bottom:'5%', left:'5%'}} className={`container ${selectedContent ? 'selected' : ''} ${containerAnimation ? 'animate' : ''}`}>
          {selectedContent === 'top_artists' && (
            <>
                <Row>
                {artistImages.map((image, index) => (
                    <Col key={index}><img src= {image} alt="Description of the image" style={{ width: '100%', height: 'auto', borderRadius:'50%'}}/>
                    </Col>
                ))}
                </Row>
                <Row>
                {artistNames.map((item, index) => (
                  <Col className="textBox">{item}</Col>
                ))}
              </Row>
            </>
          )}
          {selectedContent === 'trending_tracks' && (
            <>
                <div id="topSongs">
                <Row>
                    {trackImages.map((image, index) => (
                    <Col key={index}><img src={image} alt="Description of the image" style={{ width: '100%', height: 'auto' } }/></Col>
                    ))}
                </Row>
                <Row>
                    {trackNames.map((name, index) => (
                    <Col className="textBox">{name}</Col>
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