import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Header from '../Header';
import '../Header.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';



const Rap = () => {

  
  const [genre] = useState('Rap');
  const [artists, setartistName] = useState([]); // Use useState for artistName
  const [img, setImg] = useState([]); // Use useState for img
<<<<<<< Updated upstream
=======
  const [artistUIDs, setArtistUIDs] = useState([]); // Use useState for SongName
>>>>>>> Stashed changes

  useEffect(() => {
    const checkFunc = async () => {
      try {
<<<<<<< Updated upstream
        const response = await axios.post('/get_artist_by_genre', { genre });
=======
        const response = await axios.post('/localData/get_artists_by_genre', { genre });
>>>>>>> Stashed changes
        const data = response.data;
      
        // Extract artist names and images from the API response
        const artistNames = data.map(artist => artist.artist_name);
        const artistImages = data.map(artist => artist.artist_cover);
<<<<<<< Updated upstream
=======
        const artistUID  = data.map(artist => artist.uid);
>>>>>>> Stashed changes

        // Update the state with the extracted data
        setartistName(artistNames);
        setImg(artistImages);
<<<<<<< Updated upstream
=======
        setArtistUIDs(artistUID)
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                   <Link to={`/Artists/${encodeURIComponent(artist)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
=======
                   <Link to={`/Artists/${encodeURIComponent(artistUIDs[colIndex + rowIndex * 4])}`} style={{ textDecoration: 'none', color: 'inherit' }}>
>>>>>>> Stashed changes
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

export default Rap;