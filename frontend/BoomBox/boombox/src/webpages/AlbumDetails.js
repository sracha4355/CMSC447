import {React, useState, useEffect,useRef} from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import { FcLike} from "react-icons/fc";
import { RiDislikeFill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { Scrollbars } from 'react-custom-scrollbars-2';
import axios from 'axios';
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import './AlbumDetails.css'

const AlbumDetails = () => {
  const { URI } = useParams();
  const [albumName, setAlbumName] = useState([])
  const [image, setImg] = useState('');
  const [artist, setArtist] = useState('')
  const [release_date, setRelease] = useState('')
  const [loading, setLoading] = useState(true);
  const [boomscore, setBoomScore] = useState(0);
  const [trackList, setTrackList] =  useState([])
  const [trackUIDs, setTrackUIDs] = useState([])
  const [likes, setLikes] = useState(0)
  const [dislikes, setDisikes] = useState(0)
  const [reviews, setReviews] = useState(0)
  const [musicID, setMusicID] = useState(0)


  const effectRan  = useRef(false)


  const calculateGlowIntensity = (number) => {
    // Example calculation: intensity increases with the number
    const glowSize = number / 4;
    return `0 0 ${glowSize}px ${glowSize}px #ff00ff`;
  }

  const nav = useNavigate();

  // Fetch album details based on albumName from your API/database
  useEffect(() => {

      if(effectRan.current === false){
        const checkFunc = async () => {
          try {
            const response = await axios.post('/album/get/', {
                uri: URI
            });
            setAlbumName(response.data.album_name)
            setImg(response.data.album_cover)
            setArtist(response.data.artists)
            setRelease(response.data.release_date)
            setBoomScore(response.data.album_boomscore)
            setTrackList(response.data.track_names)
            setTrackUIDs(response.data.track_uids)
            setLikes(response.data.likes)
            setDisikes(response.data.dislikes)
            setReviews(response.data.reviews)
            setMusicID(response.data.music_id)
            setLoading(false);      
          } catch (error) {
            console.error(error);
          }
        };
        checkFunc();
  
        return () =>{
          effectRan.current = true
        };
      }
    }, 
    []);

    console.log(trackList)

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
        <div style={{ position: 'absolute', left: '0vw', top: '12vh', textAlign: 'center', width:'30vw' }}>
            <img src= {image} alt="Album Cover" style={{ width: '20vw', height: '20vw', marginTop: '15px', borderRadius:'25%' }}/>
            <div style={{width:'30vw'}}><p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>{albumName}</p></div>
        </div>
        <div style={{ position: 'absolute', left: '-5vw', bottom: '3%', textAlign: 'center' }}>
          {/*<button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <FcLike style={{ fontSize: '3rem' }}/><p style={{fontFamily:'bungee'}}>{likes}</p>
          </button>
          <br/>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <RiDislikeFill style={{ fontSize: '3rem' }}/><p style={{fontFamily:'bungee'}}>{dislikes}</p>
          </button>
          <br/>*/}
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }} onClick={() => nav(`/reviews/${musicID}`)}>
            <BiCommentDetail style={{ fontSize: '3rem' }}/><p style={{fontFamily:'bungee'}}>{reviews}</p>
          </button>
        </div>
        <div style={{ position: 'absolute', left: '-35vw', bottom: '150px', textAlign: 'center' }}> 
            <p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>Artist(s): {artist} </p>
            <p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>Release Date: {release_date} </p>
        </div>
        </Row>
      </Container>
      <div style={{ position: 'absolute', right: '48.5vw', top: '20%',textAlign:'center'}}>
        <div style = {{backgroundColor:'rgb(189, 46, 232)', height:'200px', width:'200px', borderRadius:'50%',display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize: '46px', fontFamily: 'Bungee, sans-serif', boxShadow: calculateGlowIntensity(boomscore)}}>{boomscore}</div>
        <h2 style={{ fontSize: '26px', fontFamily: 'Bungee, sans-serif', marginTop: '45px' }}>BOOMSCORE</h2>
      </div>
      <div style={{position: 'absolute', left: '65vw', top: '250px', textAlign:'center'}}>
        <h3 style={{ fontSize: '26px', fontFamily: 'Bungee, sans-serif', marginTop: '45px' }}>Track List</h3>
        <Scrollbars autoHide style={{ width: '25vw', height: '50vh', overflowX: 'hidden', borderRadius: '5%' }}>
          {trackList.map((track, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '25vw',
              height: '10vh',
              backgroundColor: index % 2 === 0 ? '#df03fc' : 'rgb(189, 46, 232)',
              fontFamily: 'Bungee, sans-serif'
            }} onClick={() => nav(`/Songs/${trackUIDs[index]}`)} id='song-column'>
              <p>{track}</p>
            </div>
          ))}
        </Scrollbars>
        
      </div>
      

    </>
  );
};

export default AlbumDetails;