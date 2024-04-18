import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Header from '../Header';
import '../Header.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';



const Blues = () => {

  
  const [genre] = useState('Blues');
  const [Songs, setSongName] = useState([]); // Use useState for SongName
  const [img, setImg] = useState([]); // Use useState for img

  useEffect(() => {
    const checkFunc = async () => {
      try {
        const response = await axios.post('/get_songs_by_genre', { genre });
        const data = response.data;
      
        // Extract Song names and images from the API response
        const SongNames = data.map(Song => Song.song_name);
        const SongImages = data.map(Song => Song.song_cover);

        // Update the state with the extracted data
        setSongName(SongNames);
        setImg(SongImages);
      } catch (error) {
        console.error(error);
      }
    };

    checkFunc();
  }, []); // Run once when the component mounts

  const rows = [];
  for (let i = 0; i < Songs.length; i += 4) {
    rows.push(Songs.slice(i, i + 4));
  }


  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((Song, colIndex) => (
                <Col key={colIndex} sm={3} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ backgroundColor: 'rgb(78, 70, 70)', width: '400px', height: '400px', position: 'relative' }}>
                   <Link to={`/Songs/${encodeURIComponent(Song)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <img src= {img[colIndex + rowIndex * 4]} alt={Song} style={{ width: '70%', height: '70%' , marginBottom:'75px'}}/></Link>
                      <p style={{ position: 'absolute', bottom: '0px', fontSize: '13px', fontFamily: 'Bungee, sans-serif'}}>{Song}</p>
                </Col>
              ))}
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Blues;