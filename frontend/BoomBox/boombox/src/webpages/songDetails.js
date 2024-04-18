import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import { FcLike} from "react-icons/fc";
import { RiDislikeFill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import axios from 'axios';
import ReactLoading from "react-loading";
import './songDetails.css';


const SongDetails = () => {
  const { songName } = useParams();
  const [image, setImg] = useState('');
  const [artist, setArtist] = useState('')
  const [release_date, setRelease] = useState('')
  const [loading, setLoading] = useState(true);
  const [boomscore, setBoomScore] = useState(0);
  const [preview, setpreview] =  useState([])
  const calculateGlowIntensity = (number) => {
    // Example calculation: intensity increases with the number
    const glowSize = number / 4;
    return `0 0 ${glowSize}px ${glowSize}px #ff00ff`;
  }



  // Fetch song details based on songName from your API/database
  useEffect(() => {
      const checkFunc = async () => {
        try {
          const response = await axios.post('/get_track_info', {
              songName
          });
          setImg(response.data.image)
          setArtist(response.data.artists)
          setRelease(response.data.release_date)
          setBoomScore(response.data.popularity)
          setpreview(response.data.preview)
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      checkFunc();
    }, 
    []);

    console.log(preview)

    if (loading) {
      return <div style={{position: 'absolute', right:'50vw', bottom: '50vh'}}>
        <ReactLoading type="cubes" color="#df03fc" height={100} width={50} />
      </div>; // You can replace this with a more elaborate loading screen component
    }
  
  return (
    <>
      <Header />
      <Container>
        <Row>
        <div style={{ position: 'absolute', left: '-35vw', top: '90px', textAlign: 'center' }}>
            <img src= {image} alt="song Cover" style={{ width: '20vw', height: '20vw', marginTop: '10px' }}/>
            <p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>{songName}</p>
        </div>
        <div style={{ position: 'absolute', left: '-35vw', bottom: '250px', textAlign: 'center' }}>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <FcLike style={{ fontSize: '3rem' }}/>
          </button>
          <br/>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <RiDislikeFill style={{ fontSize: '3rem' }}/>
          </button>
          <br/>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <BiCommentDetail style={{ fontSize: '3rem' }}/>
          </button>
        </div>
        <div style={{ position: 'absolute', left: '-35vw', bottom: '150px', textAlign: 'center' }}> 
            <p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>Artist(s): {artist} </p>
            <p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>Release Date: {release_date} </p>
        </div>
        </Row>
      </Container>
      <div style={{ position: 'absolute', right: '50vw', top: '250px',textAlign:'center'}}>
        <div style = {{backgroundColor:'rgb(189, 46, 232)', height:'200px', width:'200px', borderRadius:'50%',display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize: '46px', fontFamily: 'Bungee, sans-serif', boxShadow: calculateGlowIntensity(boomscore)}}>{boomscore}</div>
        <h2 style={{ fontSize: '26px', fontFamily: 'Bungee, sans-serif', marginTop: '45px' }}>BOOMSCORE</h2>
      </div>
      <div style={{position: 'absolute', left: '65vw', top: '250px', textAlign:'center'}}>
        
        
      {preview && (
        <div>
          <p style={{fontFamily: 'Bungee, sans-serif'}}>Want a preview? check the song out</p>
          <audio controls>
            <source src={preview} type="audio/mpeg"  />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
       
      </div>
    </>
  );
};

export default SongDetails;