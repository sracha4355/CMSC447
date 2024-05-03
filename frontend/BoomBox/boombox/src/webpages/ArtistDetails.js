import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import SlideWithImageArtist from "./SlideWithImageArtist";
import { Container, Row } from 'react-bootstrap';
import {React, useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import SlideWithImageArtist from "./SlideWithImageArtist";
import { Container, Placeholder, Row } from 'react-bootstrap';
import { FcLike} from "react-icons/fc";
import { RiDislikeFill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import './ArtistDetails.css'

const ArtistDetails = () => {
  const { artistName } = useParams();
  const { URI } = useParams();
  const [name, setName] = useState('')
  const [image, setImg] = useState('');
  const [loading, setLoading] = useState(true);
  const [boomscore, setBoomScore] = useState(0);
  const [albumList, setalbumList] =  useState([])
  const [imageList, setImageList] =  useState([])
  const [uidList, setUIDList] = useState([])
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  
  
  
  const effectRan  = useRef(false)
  
  const nav = useNavigate();
  
  const calculateGlowIntensity = (number) => {
    // Example calculation: intensity increases with the number
    const glowSize = number / 4;
    return `0 0 ${glowSize}px ${glowSize}px #ff00ff`;
  }


  // Fetch Artist details based on ArtistName from your API/database
  useEffect(() => {
      const checkFunc = async () => {
        try {
          const response = await axios.post('/get_artist', {
              artistName
          });
          setImg(response.data.image)
          setBoomScore(response.data.popularity)
          setalbumList(response.data.albumList)
          setImageList(response.data.imageList)
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      checkFunc();
    }, 
    []);

    

    if (loading) {
      return <div style={{position: 'absolute', right:'50vw', bottom: '50vh'}}>
        <ReactLoading type="cubes" color="#df03fc" height={100} width={50} />
      </div>; // You can replace this with a more elaborate loading screen component
    }

  // Fetch Artist details based on ArtistName from your API/database
  useEffect(() => {
      if (effectRan.current === false){
        const checkFunc = async () => {
  
          try {
            const response = await axios.post('/artist/get_artist', {
                uid: URI
            });
            
            setImg(response.data.result[1])
            setBoomScore(response.data.result[2])
            setalbumList(response.data.result[4])
            setImageList(response.data.result[3])
            setName(response.data.result[0])
            setUIDList(response.data.result[5])
            setLikes(response.data.result[6])
            setDislikes(response.data.result[7])
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        };
        checkFunc();
        
        return () => {
          effectRan.current = true
        };
      }
    }, []);

  

  if (loading) {
      return <div style={{position: 'absolute', right:'50vw', bottom: '50vh'}}>
        <ReactLoading type="cubes" color="#df03fc" height={100} width={50} />
      </div>; 
  }
  
  return (
    <>
      <Header />
      <Container>
        <Row>
        <div style={{ position: 'absolute', left: '-35vw', top: '90px', textAlign: 'center' }}>
            <img src= {image} alt="Artist Cover" style={{ width: '20vw', height: '20vw', marginTop: '10px' }}/>
            <p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>{artistName}</p>
        </div>
        <div style={{ position: 'absolute', right: '15vw', top: '25vh', textAlign: 'center', width:'200px' }}>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <FcLike style={{ fontSize: '5rem' }}/>
          </button>
          <br/>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <RiDislikeFill style={{ fontSize: '5rem' }}/>
          </button>
          <br/>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <BiCommentDetail style={{ fontSize: '5rem' }}/>
          </button>
            <img src= {image} alt="Artist Cover" style={{ width: '20vw', height: '20vw', marginTop: '15px', borderRadius:'50%' }}/>
            <p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>{name}</p>
        </div>
        <div style={{ position: 'absolute', right: '15vw', top: '25vh', textAlign: 'center', width:'200px' }}>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <FcLike style={{ fontSize: '5rem' }}/><p style={{fontFamily:'bungee'}}>{likes}</p>
          </button>
          <br/>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <RiDislikeFill style={{ fontSize: '5rem' }}/><p style={{fontFamily:'bungee'}}>{dislikes}</p>
          </button>
          <br/>
        </div>
        </Row>
      </Container>
      <div style={{ position: 'absolute', right: '45vw', top: '20vh',textAlign:'center'}}>
        <div style = {{backgroundColor:'rgb(189, 46, 232)', height:'200px', width:'200px', borderRadius:'50%',display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize: '46px', fontFamily: 'Bungee, sans-serif', boxShadow: calculateGlowIntensity(boomscore)}}>{boomscore}</div>
        <h2 style={{ fontSize: '26px', fontFamily: 'Bungee, sans-serif', marginTop: '45px' }}>BOOMSCORE</h2>
      </div>
      <div style={{position: 'absolute', left: '10vw', bottom: '15vh', textAlign:'center', width:'75vw', height:'20vh'}}>
      <h3 style={{fontFamily: 'Bungee, sans-serif'}}>Albums / Featured in</h3>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop = {true}
      >
        {albumList.map((album, index) => (
          <SwiperSlide key={index} >
                  <SlideWithImageArtist album = {albumList[index]} imageURL={imageList[index]}/>
          <SwiperSlide key={index} onClick={() => nav(`/Albums/${uidList[index]}`)} >
                  <SlideWithImageArtist album = {album} imageURL={imageList[index]}/>
          </SwiperSlide>
        ))

        }
      </Swiper>
      </div>
      

    </>
  );
};

export default ArtistDetails;
