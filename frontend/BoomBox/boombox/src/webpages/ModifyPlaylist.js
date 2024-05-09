import React, {useState, useEffect} from "react";
import Header from './Header'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";
import SlideWithImage from "./SlideWithImage";

import { FaPlus } from "react-icons/fa";
import './ModifyPlaylist.css'


const ModifyPlaylist = () => {

    const [playlists, setPlaylists] =  useState([]);
    const [chosenplaylistID, setPlaylistID] = useState(0)
    const [albumClicked, setCond] = useState(false);
    const [swiperKey, setSwiperKey] = useState(0); // Add state for Swiper key
    const [data, setData] = useState([]);
    const [track, setTrack] = useState('');
    const [songs, setSongs] = useState([]);

    const nav = useNavigate()


    useEffect(() => {
        const loadPlaylists = async () => {
          try {
            const response = await axios.get('/playlist/getAll', {
                params: {
                    acct_id: window.localStorage.getItem("userID")
                }
            });
            setPlaylists(response.data)
          } catch (error) {
            console.error(error);
          }
        };
        loadPlaylists();
      }, 
      []);

  

    const getPlaylistData = async (playlistID) =>{
        try{
            const response = await axios.get('/playlist/get_by_id', {
                params:{
                    acct_id : 1,
                    playlist_id: playlistID
                },
        
            });
            setSongs(response.data)
            setPlaylistID(playlistID)
            setCond(true)
        }
        catch(error){
            console.error(error)
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('/search/search', {
                params: {
                    type: 'track',
                    limit: '50',
                    q: track
                }
            });
            setData(response.data.result);
        } catch (error) {
            console.error(error);
        }
    };

    const addSong = async (playlistID, imageURL, spotifyUID, song_name ) => {
        try{
            const response = await axios.post('/playlist/add',{
                acct_id : 1,
                playlist_id:playlistID,
                image_url:imageURL,
                uid:spotifyUID,
                track_name:song_name
            })
            const songData = {
                image_url:imageURL,
                spotify_uid:spotifyUID,
                song_name:song_name
            }
            setSongs([...songs, songData]); // Update songs state by spreading previous songs array
            setSwiperKey(swiperKey + 1); // Increment Swiper key to force re-render
        }
        catch(error){
            console.error(error)
        }
    }


    const removeSong = async (playlistID, spotifyUID, index) => {
        try{
            const response = await axios.post('/playlist/remove',{
                acct_id : 1,
                playlist_id:playlistID,
                uid:spotifyUID,
            })

            const updatedSongs = [...songs];
            updatedSongs.splice(index, 1);
            setSongs(updatedSongs);
            setSwiperKey(swiperKey + 1);
    
            
        }
        catch(error){
            console.error(error)
        }
    }

    console.log(songs)
    return (
        <>
            <Header/>
            <div id = 'playlists'>
             {!albumClicked && (
                <Scrollbars autoHide style={{ width: '70vw', height: '70vh', overflowX: 'hidden'}}>
                    <Row id='results_playlists'>
                            {playlists.map((item, index) => (
                                <Col id='playlist-col' key={index} sm={4} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '300px', height: '300px', position: 'relative', margin: '20px' }} onClick={ () => getPlaylistData(item.playlist_id)}>   
                                            <div>
                                                <img src={item.playlist_image} style={{ width: '85%', height: '85%' }} alt={item.playlist_name} />       
                                                <p>{item.playlist_name}</p>
                                            </div>
                                </Col>  
                            ))}
                    </Row>
                </Scrollbars>
             )
             }           
            {albumClicked &&(
                    <>
                    <div id='search-tracks' style={{ textAlign: 'center' }}>
                        <Form.Control
                            type="text"
                            placeholder="Song Name"
                            value={track}
                            onChange={(e) => setTrack(e.target.value)}
                        />
                        <Button variant="light" onClick={fetchData}>Search</Button>{' '}
                    </div>
                    {data.length > 0 && (
                                <Scrollbars autoHide style={{ width: '55vw', height: '65vh', overflowX: 'hidden' , left:'-20vw', top:'12vh'}}>
                                        <Row id='results'>
                                            {data.map((item, index) => (
                                                <Col key={index} sm={3} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '300px', height: '300px', position: 'relative', margin: '20px' }}>
                                                    <div>
                                                        <img src={item.image} style={{ width: '85%', height: '85%' }} alt={item.track_name} />
                                                    </div>
                                                    <div>
                                                        <p>{item.track_name}</p>
                                                    </div>
                                                    <div>
                                                        <Button onClick={() => addSong(chosenplaylistID,item.image,item.track_spotify_uid,item.track_name)}  style={{ backgroundColor: '#df00d3', border: 'none' }}>
                                                            <FaPlus />
                                                        </Button>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                </Scrollbars>
                        )
                    }
                    <div id='modify-playlist'>
                      <Swiper
                          key={swiperKey} // Set key to force re-render
                          slidesPerView={2}
                          spaceBetween={30}
                          modules={[Pagination]}
                          className="mySwiper"
                          loop={true}
                          style={{ height: '300px' }}
                          grabCursor={true}
                      >
                          {songs.map((song, index) => (
                              <SwiperSlide key={index}>
                                  <SlideWithImage genre={song.song_name} imageURL={song.image_url} />
                                  <Button onClick={() => removeSong(chosenplaylistID,song.spotify_uid, index)} style={{ backgroundColor: '#df00d3', border: 'none' }}><FaRegTrashAlt/></Button>
                              </SwiperSlide>
                          ))}
                      </Swiper>
                      <div id='submit' style={{textAlign:'center'}}>
                            <br></br>
                            <Button onClick={() => nav(`/Playlists/Manage`)} variant="light" style={{backgroundColor: '#df00d3' , border:'none'}}><FaCheck/></Button>{' '}
                      </div>
                  </div>
                    </>
                )}
            </div>
        </>
    )
}

export default ModifyPlaylist