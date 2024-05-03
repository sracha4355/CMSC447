import React, { useState, useEffect } from "react";
import './Songs.css';
import Header from "./Header.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SlideWithImage from "./SlideWithImage";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Songs = () => {
    const musicGenres = ["Rock", "Pop", "Rap", "Jazz", "Classical", "Electronic", "Country", "RandB", "Latino", "Blues"];
    const musicGenresAllChars = ["Rock", "Pop", "Rap", "Jazz", "Classical", "Electronic", "Country", "R&B", "Latino", "Blues"];
    const genreImages = ['https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_%28Nirvana%29_album_cover.jpg',
    'https://upload.wikimedia.org/wikipedia/en/b/b2/Olivia_Rodrigo_-_SOUR.png',
    'https://upload.wikimedia.org/wikipedia/en/9/97/Yeat_-_2093.png',
    'https://media.pitchfork.com/photos/62850f69a57fda486c44c8ad/1:1/w_450%2Ch_450%2Cc_limit/Shabaka.jpg',
    'https://lastfm.freetls.fastly.net/i/u/ar0/2f8d42c16ef24f00cfc7381796c1aa39.jpg',
    'https://www.virginmusic.jp/files/2024/02/Last-Of-Us.jpg',
    'https://i.scdn.co/image/ab67616d0000b273ca650d3a95022e0490434ba1',
    'https://bridgesetsound.com/cdn/shop/files/sza.jpg?v=1688160992&width=480',
    'https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png',
    'https://i.scdn.co/image/a45eb513634337dcdf715bdb80bc5820ce9c3207',

    ];

    const [popularSongs, setPopularSongs] = useState([]);
    const [imgPopular, setImgPopular] = useState([]);
<<<<<<< Updated upstream

    const [recentSongs, setRecentSongs] = useState([]);
    const [imgRecent, setImgRecent] = useState([]);
=======
    const [popularURI, setPopularURI] = useState([]);

    const [recentSongs, setRecentSongs] = useState([]);
    const [imgRecent, setImgRecent] = useState([]);
    const [recentURI, setRecentURI] = useState([]);

>>>>>>> Stashed changes

    const nav = useNavigate();

    useEffect(() => {
        const fetchPopularSongs = async () => {
            try {
<<<<<<< Updated upstream
                const response = await axios.post('/get_popular_songs', {});
=======
                const response = await axios.get('/localData/get_popular_songs', {});
>>>>>>> Stashed changes
                const data = response.data;
                
                const SongNames = data.map(Song => Song.song_name);
                const SongImages = data.map(Song => Song.song_cover);
<<<<<<< Updated upstream

                setPopularSongs(SongNames);
                setImgPopular(SongImages);
=======
                const SongURIs = data.map(Song => Song.uid)

                setPopularSongs(SongNames);
                setImgPopular(SongImages);
                setPopularURI(SongURIs);
>>>>>>> Stashed changes
            } catch (error) {
                console.error(error);
            }
        };

        fetchPopularSongs();
    }, []);

    useEffect(() => {
        const fetchRecentSongs = async () => {
            try {
<<<<<<< Updated upstream
                const response = await axios.post('/get_recent_songs', {});
                const data = response.data;
                
                const SongNames = data.map(Song => Song.track_name);
                const SongImages = data.map(Song => Song.track_cover);

                setRecentSongs(SongNames);
                setImgRecent(SongImages);
=======
                const response = await axios.get('/localData/get_recent_songs', {});
                const data = response.data;
                
                const SongNames = data.map(Song => Song.song_name);
                const SongImages = data.map(Song => Song.image);
                const SongURIs = data.map(album => album.uid);

                setRecentSongs(SongNames);
                setImgRecent(SongImages);
                setRecentURI(SongURIs);
>>>>>>> Stashed changes
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecentSongs();
    }, []);

    return (
        <>
            <Header />
            
            <div className="swiper-container" style={{height:'300px'}}>
                <h3>Songs By Genre</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{ clickable: true }}
                    style={{height:'300px'}}
                >
                    {musicGenres.map((genre, index) => (
                        <SwiperSlide key={index} onClick={() => nav(`Songs/${genre}`)}>
                            <SlideWithImage genre={musicGenresAllChars[index]} imageURL={genreImages[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-container" style={{height:'300px'}}>
                <h3>Popular Songs</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{ clickable: true }}
                    style={{height:'300px'}}
                >
                    {popularSongs.map((Song, index) => (
<<<<<<< Updated upstream
                        <SwiperSlide key={index} onClick={() => nav(`/Songs/${encodeURIComponent(Song)}`)}>
=======
                        <SwiperSlide key={index} onClick={() => nav(`/Songs/${encodeURIComponent(popularURI[index])}`)}>
>>>>>>> Stashed changes
                            <SlideWithImage genre={Song} imageURL={imgPopular[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-container" style={{height:'300px'}}>
                <h3>Recent Songs</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{ clickable: true }}
                    style={{height:'300px'}}
                >
                    {recentSongs.map((Song, index) => (
<<<<<<< Updated upstream
                        <SwiperSlide key={index} onClick={() => nav(`/Songs/${encodeURIComponent(Song)}`)}>
=======
                        <SwiperSlide key={index} onClick={() => nav(`/Songs/${encodeURIComponent(recentURI[index])}`)}>
>>>>>>> Stashed changes
                            <SlideWithImage genre={Song} imageURL={imgRecent[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Songs;