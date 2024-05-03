import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Header from '../Header';
import '../Header.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';



const RandB = () => {
  const [genre] = useState('R&B');
  const [Albums, setAlbumName] = useState([]); // Use useState for albumName
  const [img, setImg] = useState([]); // Use useState for img
<<<<<<< Updated upstream
=======
  const [albumUIDs, setAlbumUIDs] = useState([]); // Use useState for SongName
>>>>>>> Stashed changes

  useEffect(() => {
    const checkFunc = async () => {
      try {
<<<<<<< Updated upstream
        const response = await axios.post('/get_albums_by_genre', { genre });
=======
        const response = await axios.post('localData/get_albums_by_genre', { genre });
>>>>>>> Stashed changes
        const data = response.data;
      
        // Extract album names and images from the API response
        const albumNames = data.map(album => album.album_name);
        const albumImages = data.map(album => album.album_cover);
<<<<<<< Updated upstream
=======
        const albumUID  = data.map(album =>  album.uid);
>>>>>>> Stashed changes

        // Update the state with the extracted data
        setAlbumName(albumNames);
        setImg(albumImages);
<<<<<<< Updated upstream
=======
        setAlbumUIDs(albumUID)
>>>>>>> Stashed changes
      } catch (error) {
        console.error(error);
      }
    };

    checkFunc();
  }, []); // Run once when the component mounts

  const rows = [];
  for (let i = 0; i < Albums.length; i += 4) {
    rows.push(Albums.slice(i, i + 4));
  }


  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((album, colIndex) => (
                <Col key={colIndex} sm={3} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ backgroundColor: 'rgb(78, 70, 70)', width: '400px', height: '400px', position: 'relative' }}>
<<<<<<< Updated upstream
                   <Link to={`/Albums/${encodeURIComponent(album)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
=======
                   <Link to={`/Albums/${encodeURIComponent(albumUIDs[colIndex + rowIndex * 4])}`} style={{ textDecoration: 'none', color: 'inherit' }}>
>>>>>>> Stashed changes
                      <img src= {img[colIndex + rowIndex * 4]} alt={album} style={{ width: '70%', height: '70%' , marginBottom:'75px'}}/></Link>
                      <p style={{ position: 'absolute', bottom: '0px', fontSize: '13px', fontFamily: 'Bungee, sans-serif'}}>{album}</p>
                </Col>
              ))}
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default RandB;