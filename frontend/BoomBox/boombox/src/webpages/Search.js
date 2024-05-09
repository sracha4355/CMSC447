import React, {useEffect, useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import {Row, Col} from "react-bootstrap";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Search.css'
import axios from "axios";
import Header from './Header'




const Search = () =>{

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');

    const [songData, setSongData] = useState([]);
    const [albumData, setAlbumData] = useState([]);
    const [artistData, setArtistData] = useState([]);
    const [reviewData, setReviewData ] = useState([]);
    const [playlistData, setPlaylistData] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        const getSongs = async () => {
          try {
            const response = await axios.get('/search/search', {
                params: {
                    q: query,
                    limit: 50,
                    type : 'track'
                }
            });
            setSongData(response.data.result)
            console.log(response.data)
          } catch (error) {
            console.error(error);
          }
        };
        getSongs();
      }, 
      [query,]);

      useEffect(() => {
        const getAlbums = async () => {
          try {
            const response = await axios.get('/search/search', {
                params: {
                    q: query,
                    limit: 50,
                    type : 'album'
                }
            });
            setAlbumData(response.data.result)
          } catch (error) {
            console.error(error);
          }
        };
        getAlbums();
      }, 
      [query,]);


      useEffect(() => {
        const getArtists = async () => {
          try {
            const response = await axios.get('/search/search', {
                params: {
                    q: query,
                    limit: 50,
                    type : 'artist'
                }
            });
            setArtistData(response.data.result)
          } catch (error) {
            console.error(error);
          }
        };
        getArtists();
      }, 
      [query,]);

      useEffect(() => {
        const getPlaylist = async () => {
          try {
            const response = await axios.get('/search/search', {
                params: {
                    q: query,
                    type : 'playlist'
                }
            });
            setPlaylistData(response.data.result)
          } catch (error) {
            console.error(error);
          }
        };
        getPlaylist();
      }, 
      [query,]);

      useEffect(() => {
        const getReview = async () => {
          try {
            const response = await axios.get('/search/search', {
                params: {
                    q: query,
                    type : 'review'
                }
            });
            setReviewData(response.data.result)
          } catch (error) {
            console.error(error);
          }
        };
        getReview();
      }, 
      [query,]);

    console.log(reviewData)
     

    return(
        <>
        <Header/>
        {
            songData.length > 0 && (
                <Accordion style={{width : '90vw', marginLeft: '5vw'}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div style={{ textAlign: 'center', width: '100%', fontFamily:'bungee'}}>Songs</div>
                        </Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: '#c043ba' }}>
                            <Scrollbars autoHide style={{ width: '80vw', height: '70vh', overflowX: 'hidden' }}>
                                <Row id='songs' style={{ width: '70vw', marginLeft: '5vw' }}>
                                    {songData.map((item, index) => (
                                        <Col key={index} onClick={() => nav(`/Songs/${item.track_spotify_uid}`)} sm={4} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '100px', height: '250px', position: 'relative', marginTop: '50px', marginLeft: '10vw' }} id="search-col">
                                            <div>
                                                <img src={item.image} style={{ width: '220px', height: '220px' }} alt={item.track_name} />
                                            </div>
                                            <div style={{ width: '10vw', overflow: 'hidden' }}>
                                                <p>{item.track_name}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Scrollbars>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        }
        {
            albumData.length > 0 && (
                <Accordion style={{width : '90vw', marginLeft: '5vw'}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div style={{ textAlign: 'center', width: '100%', fontFamily:'bungee'}}>Albums</div>
                        </Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: '#c043ba' }}>
                            <Scrollbars autoHide style={{ width: '80vw', height: '70vh', overflowX: 'hidden' }}>
                                <Row id='songs' style={{ width: '70vw', marginLeft: '5vw' }}>
                                    {albumData.map((item, index) => (
                                        <Col key={index} onClick={() => nav(`/Albums/${item.album_spotify_uid}`)} sm={4} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '100px', height: '250px', position: 'relative', marginTop: '50px', marginLeft: '10vw' }} id="search-col">
                                            <div>
                                                <img src={item.image} style={{ width: '220px', height: '220px' }} alt={item.album_name}/>
                                            </div>
                                            <div style={{ width: '10vw', overflow: 'hidden' }}>
                                                <p>{item.album_name}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Scrollbars>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        }
         {
            artistData.length > 0 && (
                <Accordion style={{width : '90vw', marginLeft: '5vw'}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div style={{ textAlign: 'center', width: '100%', fontFamily:'bungee'}}>Artists</div>
                        </Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: '#c043ba' }}>
                            <Scrollbars autoHide style={{ width: '80vw', height: '70vh', overflowX: 'hidden' }}>
                                <Row id='songs' style={{ width: '70vw', marginLeft: '5vw' }}>
                                    {artistData.map((item, index) => (
                                        <Col key={index} onClick={() => nav(`/Artists/${item.artist_uri}`)} sm={4} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '100px', height: '250px', position: 'relative', marginTop: '50px', marginLeft: '10vw' }} id="search-col">
                                            <div>
                                                <img src={item.image} style={{ width: '220px', height: '220px' , borderRadius:'50%' }} alt={item.artist_name} />
                                            </div>
                                            <div style={{ width: '10vw', overflow: 'hidden' }}>
                                                <p>{item.artist_name}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Scrollbars>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        }
        {
            playlistData.length > 0 && (
                <Accordion style={{width : '90vw', marginLeft: '5vw'}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div style={{ textAlign: 'center', width: '100%', fontFamily:'bungee'}}>Playlists</div>
                        </Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: '#c043ba' }}>
                            <Scrollbars autoHide style={{ width: '80vw', height: '70vh', overflowX: 'hidden' }}>
                                <Row id='songs' style={{ width: '70vw', marginLeft: '10vw' }}>
                                    {playlistData.map((item, index) => (
                                        <Col key={index}  onClick={() => nav(`/Playlists/${item.playlist_id}`)} sm={4} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '100px', height: '250px', position: 'relative', marginTop: '50px', marginLeft: '10vw' }} id="search-col">
                                            <div>
                                                <img src={item.image} style={{ width: '220px', height: '220px'}} alt={item.playlist_name} />
                                            </div>
                                            <div style={{ width: '10vw', overflow: 'hidden' }}>
                                                <p>{item.playlist_name}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Scrollbars>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        }
        {
            reviewData.length > 0 && (
                <Accordion style={{width : '90vw', marginLeft: '5vw'}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div style={{ textAlign: 'center', width: '100%', fontFamily:'bungee'}}>Reviews</div>
                        </Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: '#c043ba' }}>
                            <Scrollbars autoHide style={{ width: '80vw', height: '70vh', overflowX: 'hidden' }}>
                                <Row id='songs' style={{ width: '70vw', marginLeft: '10vw' }}>
                                    {reviewData.map((item, index) => (
                                        <Col key={index} onClick={() => nav(`/Reviews/${item.review_id}`)} sm={4} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '100px', height: '250px', position: 'relative', marginTop: '50px', marginLeft: '7vw' }} id="search-col">
                                            <div>
                                                <img src={item.image} style={{ width: '220px', height: '220px'}} alt={query} />
                                            </div>
                                            <div style={{ width: '10vw', overflow: 'hidden' }}>
                                                <p>{query}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Scrollbars>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        }
        </>
    )
}

export default Search