import React, {useEffect, useState} from "react";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './PlaylistDetails.css'

const PlaylistDetails = () => {
    
    const{playlistID} = useParams();
    const [songs, setSongs] = useState([])

    const nav = useNavigate()


    useEffect(() => {
        const getSongs = async () => {
          try {
            const response = await axios.get('/playlist/get_by_id', {
                params:{
                    acct_id : 1,
                    playlist_id: playlistID
                },
            });
            setSongs(response.data)
          } catch (error) {
            console.error(error);
          }
        };
        getSongs();
      }, 
      []);

    
   
    return(
        <>
            <Header/>
            <div id = 'songs-div'>
                <Scrollbars autoHide style={{width:'85vw', height: '75vh', overflowX: 'hidden' }}>
                            <Row id = 'songs-rows'>
                                {songs.map((item, index) => (
                                    <Col key={index}  sm={3} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '300px', height: '300px', position: 'relative' }}>
                                        <div>
                                            <img id="playlist-col" src={item.image_url} style={{ width: '85%', height: '85%' }} alt={item.track_name}  onClick={() => nav(`/Songs/${item.spotify_uid}`)}/>
                                        </div>
                                        <div>
                                            <p>{item.song_name}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                </Scrollbars>
            </div>
        </>
    )
}

export default PlaylistDetails