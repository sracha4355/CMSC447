import React, {useEffect, useState} from "react";
import { Row, Col } from "react-bootstrap";
import Scrollbars from "react-custom-scrollbars-2";
import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import Header from "./Header";
import './DeletePlaylist.css'


const DeletePlaylist = () => {

    const [playlists, setPlaylists] =  useState([])
    const [deletedPlaylists, setDeleted] = useState([])
    
    useEffect(() => {
        const loadPlaylists = async () => {
          try {
            const response = await axios.get('/playlist/getAll', {
                params: {
                    acct_id: 1
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

      console.log(playlists)
      console.log(deletedPlaylists)

    const deletePlaylist = async (playlistId) => {
        try {
            await axios.post('/playlist/delete', {
                acct_id: 1,
                playlist_id: playlistId
            });
    
            // Remove the deleted playlist from playlists
            setPlaylists(prevPlaylists => prevPlaylists.filter(item => item.playlist_id !== playlistId));
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Header/>
            <div id = 'playlists-delete'>
             <Scrollbars autoHide style={{ width: '70vw', height: '70vh', overflowX: 'hidden'}}>
                    <Row id='results_playlists'>
                            {playlists.map((item, index) => (   
                                <Col key={index} sm={4} className="d-flex flex-column align-items-center justify-content-end text-center" style={{ width: '300px', height: '300px', position: 'relative', margin: '20px' }}>    
                                            <div>
                                                <img src={item.playlist_image} style={{ width: '85%', height: '85%' }} alt={item.playlist_name} />       
                                                <p>{item.playlist_name}</p>
                                                <div>
                                                    <Button onClick={() => deletePlaylist(item.playlist_id)}  style={{ backgroundColor: '#df00d3', border: 'none' }}>
                                                        <FaRegTrashAlt />
                                                    </Button>
                                                </div>
                                            </div>
                                </Col>
                                
                            ))}
                    </Row>
                </Scrollbars>
            </div>
        </>
    )
}

export default DeletePlaylist