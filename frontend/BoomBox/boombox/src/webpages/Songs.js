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
    const genreImages = ['https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',
    'https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',
    'https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',
    'https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',
    'https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',
    'https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',
    'https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',
    'https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',
    'https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',
    'https://t4.ftcdn.net/jpg/04/37/09/15/360_F_437091521_n0EGtfzMGhyKmVln0RhD22915SdVyiqb.jpg',

    ];

    const [popularSongs, setPopularSongs] = useState([]);
    const [imgPopular, setImgPopular] = useState([]);

    const [recentSongs, setRecentSongs] = useState([]);
    const [imgRecent, setImgRecent] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        const fetchPopularSongs = async () => {
            try {
                const response = await axios.post('/get_popular_songs', {});
                const data = response.data;
                
                const SongNames = data.map(Song => Song.song_name);
                const SongImages = data.map(Song => Song.song_cover);

                setPopularSongs(SongNames);
                setImgPopular(SongImages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPopularSongs();
    }, []);

    useEffect(() => {
        const fetchRecentSongs = async () => {
            try {
                const response = await axios.post('/get_recent_songs', {});
                const data = response.data;
                
                const SongNames = data.map(Song => Song.Song_name);
                const SongImages = data.map(Song => Song.Song_cover);

                setRecentSongs(SongNames);
                setImgRecent(SongImages);
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
                        <SwiperSlide key={index} onClick={() => nav(`/Songs/${genre}`)}>
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
                        <SwiperSlide key={index} onClick={() => nav(`/Songs/${encodeURIComponent(Song)}`)}>
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
                        <SwiperSlide key={index} onClick={() => nav(`/Songs/${encodeURIComponent(Song)}`)}>
                            <SlideWithImage genre={Song} imageURL={imgRecent[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Songs;