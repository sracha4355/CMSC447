import React, { useEffect, useState } from "react";
import './CreatePlaylist.css'
import Header from './Header'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaPlus } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import SlideWithImage from "./SlideWithImage";
import { useNavigate } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';

const CreatePlaylist = () => {
    const [data, setData] = useState([]);
    const [songList, setSongList] = useState([]);
    const [track, setTrack] = useState('');
    const [songListKey, setSongListKey] = useState(0);
    const [songUIDs, setSongUIDs] = useState([]);
    const [songNames, setSongNames]= useState([]);
    const [images, setImages] = useState([])
    const [playlistName, setPlaylistName] = useState('');
    const [err, setErr] =useState('')
    const navigate = useNavigate();
    

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
    
    

    
    const finishSelection  =  async () => {
        if(playlistName === ''){
            setErr('Please enter a name for the playlist')
        }
        else{
            setErr('')
            try{
                const response = await axios.post('/playlist/create',{
                    acct_id: window.localStorage.getItem("userID"),
                    uid_list: songUIDs,
                    playlist_name: playlistName,
                    image_url: images,
                    track_names:songNames
                })
                if(response.status === 200){
                    navigate('/Playlists/Manage');
                }
            }
            catch(error){
                console.log(error)
            }
        }
        
    }

    const handleAddToPlaylist = (item) => {
        setSongList([...songList, item]); // Adding item to songList
        setSongListKey((prevKey) => prevKey + 1);
        setSongUIDs([...songUIDs, item.track_spotify_uid]);
        setSongNames([...songNames, item.track_name]);
        setImages([...images,item.image]);
    };

    const handleRemoveFromPlaylist = (indexToRemove) => {
        const updatedSongList = songList.filter((_, index) => index !== indexToRemove);
        const updatedUIDList = songUIDs.filter((_, index) => index !== indexToRemove);
        const updatedSongNameList = songNames.filter((_, index) => index !== indexToRemove);
        const updatedImageList = images.filter((_, index) => index !== indexToRemove);
        setSongList(updatedSongList);
        setSongUIDs(updatedUIDList);
        setSongNames(updatedSongNameList);
        setImages(updatedImageList);
    };

    return (
        <>
            <Header />
            <div id='playlist-name' style={{ textAlign: 'center' }}>
                <Form.Control
                    type="text"
                    placeholder="Song Name"
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                />
                <Button variant="light" onClick={fetchData}>Search</Button>{' '}
            </div>
            <div id='search-results' style={{ marginTop: '20vh', marginLeft: '2.5vw' }}>
                {data.length > 0 && (
                    <Scrollbars autoHide style={{ width: '55vw', height: '65vh', overflowX: 'hidden' }}>
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
                                        <Button onClick={() => handleAddToPlaylist(item)} style={{ backgroundColor: '#df00d3', border: 'none' }}>
                                            <FaPlus />
                                        </Button>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                   </Scrollbars>
                )}
                {songList.length > 0 && (
                  <div id='songList'>
                      <Swiper
                          key={songListKey} // Key prop to force re-render
                          slidesPerView={2}
                          spaceBetween={30}
                          modules={[Pagination]}
                          className="mySwiper"
                          loop={true}
                          style={{ height: '300px' }}
                          grabCursor={true}
                      >
                          {songList.map((song, index) => (
                              <SwiperSlide key={index}>
                                  <SlideWithImage genre={song.track_name} imageURL={song.image} />
                                  <Button onClick={() => handleRemoveFromPlaylist(index)} style={{ backgroundColor: '#df00d3', border: 'none' }}><FaRegTrashAlt/></Button>
                              </SwiperSlide>
                          ))}
                      </Swiper>
                      <div id='submit' style={{textAlign:'center'}}>
                            <Form.Control
                                    type="text"
                                    placeholder="Playlist Name"
                                    value={playlistName}
                                    onChange={(e) => setPlaylistName(e.target.value)}
                                />
                            <br></br>
                            <Button onClick={() => finishSelection()} variant="light" style={{backgroundColor: '#df00d3' , border:'none'}}><FaCheck/></Button>{' '}
                      </div>
                  </div>
              )}
              {err !== '' && (
                <p style={{position:'absolute', left:'65%', top:'100%', fontFamily:'bungee'}}>{err}</p>
              )}
            </div>
        </>
    )
}

export default CreatePlaylist;