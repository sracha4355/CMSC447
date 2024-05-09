import React, {useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import Header from './Header'
import './ManagePlaylist.css'
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import {Row, Col} from "react-bootstrap"
import { IoMdSwap } from "react-icons/io";
import { Scrollbars } from 'react-custom-scrollbars-2';
import axios from 'axios'

const ManagePlaylist = () => {

    const [playlists, setPlaylists] =  useState([])

    const effectRan = useRef(false)
    
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
        if (effectRan.current === false) {
            loadPlaylists();
            return () => effectRan.current = true;
        }
      }, 
      []);

      console.log(playlists)

    return (
        <>
            <Header />
            <div id="buttons">
                <div>
                    <Link to="Create">
                        <button style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}><FaPlus style={{ fontSize: '4rem' }} /></button>
                    </Link>
                    <div>
                        <p>Create</p>
                    </div>
                </div>
                <div>
                    <Link to = "Delete">
                        <button style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}><FaRegTrashAlt style={{ fontSize: '4rem' }} /></button>
                    </Link>
                    <div>
                        <p>Delete</p>
                    </div>
                </div>
                <div>
                    <Link to = "Modify">
                    <button style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}><IoMdSwap style={{ fontSize: '4rem' }} /></button>
                    </Link>
                    <div>
                        <p>Modify</p>
                    </div>
                </div>
            </div>
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
    );
}

export default ManagePlaylist;