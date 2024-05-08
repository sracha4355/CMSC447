import React , {useEffect, useState} from "react";
import Header from './Header'
import {Row, Col} from "react-bootstrap"
import './BrowsePlaylist.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from "react-router-dom";
import axios from 'axios'

const BrowsePlaylist = () => {
    const [playlists, setPlaylists] =  useState([])

    useEffect(() => {
        const loadPlaylists = async () => {
          try {
            const response = await axios.get('/playlist/get_playlist_table');
            setPlaylists(response.data)
          } catch (error) {
            console.error(error);
          }
        };
        loadPlaylists();
      }, 
      []);

    console.log(playlists) 

    return(
    <>
        <Header/>
        <div id = 'playlists'>
             <Scrollbars autoHide style={{ width: '70vw', height: '70vh', overflowX: 'hidden'}}>
                    <Row id='results_playlists'>
                            {playlists.map((item, index) => (
                                <Col key={index} sm={4} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '300px', height: '300px', position: 'relative', margin: '20px' }}>    
                                        <Link to = {`/Playlists/${encodeURIComponent(item.playlist_id)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <div>
                                                <img src={item.playlist_image} style={{ width: '85%', height: '85%' }} alt={item.playlist_name} />       
                                                <p>{item.playlist_name}</p>
                                            </div>
                                        </Link>  
                                </Col>
                                
                            ))}
                    </Row>
                </Scrollbars>
            </div>
    </>
    )

}

export default BrowsePlaylist