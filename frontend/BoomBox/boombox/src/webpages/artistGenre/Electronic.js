import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Header from '../Header';
import '../Header.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';



const Electronic = () => {

  
  const [genre] = useState('Electronic');
  const [artists, setartistName] = useState([]); // Use useState for artistName
  const [img, setImg] = useState([]); // Use useState for img

  useEffect(() => {
    const checkFunc = async () => {
      try {
        const response = await axios.post('/get_artist_by_genre', { genre });
        const data = response.data;
      
        // Extract artist names and images from the API response
        const artistNames = data.map(artist => artist.artist_name);
        const artistImages = data.map(artist => artist.artist_cover);

        // Update the state with the extracted data
        setartistName(artistNames);
        setImg(artistImages);
      } catch (error) {
        console.error(error);
      }
    };

    checkFunc();
  }, []); // Run once when the component mounts

  const rows = [];
  for (let i = 0; i < artists.length; i += 4) {
    rows.push(artists.slice(i, i + 4));
  }


  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((artist, colIndex) => (
                <Col key={colIndex} sm={3} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ backgroundColor: 'rgb(78, 70, 70)', width: '400px', height: '400px', position: 'relative' }}>
                   <Link to={`/artists/${encodeURIComponent(artist)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <img src= {img[colIndex + rowIndex * 4]} alt={artist} style={{ width: '200px', height: '200px' , marginBottom:'75px', borderRadius:'50%'}}/></Link>
                      <p style={{ position: 'absolute', bottom: '0px', fontSize: '13px', fontFamily: 'Bungee, sans-serif'}}>{artist}</p>
                </Col>
              ))}
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Electronic;