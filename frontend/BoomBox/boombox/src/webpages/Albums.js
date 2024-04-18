import React, { useState, useEffect } from "react";
import './Albums.css';
import Header from "./Header.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SlideWithImage from "./SlideWithImage";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Albums = () => {
    const musicGenres = ["Rock", "Pop", "Rap", "Jazz", "Classical", "Electronic", "Country", "RandB", "Latino", "Blues"];
    const musicGenresAllChars = ["Rock", "Pop", "Rap", "Jazz", "Classical", "Electronic", "Country", "R&B", "Latino", "Blues"];
    const genreImages = [
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7aMB5trwPgJa82IAUX6uF5w7Cw3JbJE8x0COhOMu9yujU58Z1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdT7Hx73xEUUnyzR3xQz0Mvwh0LQ6y4WVeptjHc_sluA&s",
        "https://townsquare.media/site/812/files/2024/03/attachment-future-metro-boomin-we-dont-trust-you-photo.jpg?w=1080&q=75",
        "https://cdn.britannica.com/99/99699-050-237CA703/Duke-Ellington.jpg",
        "https://static.dw.com/image/18418948_605.webp",
        "https://imageio.forbes.com/specials-images/imageserve/5be1e2a3a7ea437059163919/0x0.jpg?format=jpg&crop=1999,1999,x0,y0,safe&height=1999&width=1999",
        "https://yt3.googleusercontent.com/LRIndGbTtvROYQJT_abmQcCQwrPJKGaaN-cmrnkawxfFHRRGIQZ_DcoB3Yo8feVt5p1atopn=s900-c-k-c0x00ffffff-no-rj",
        "https://www.billboard.com/wp-content/uploads/2023/06/sza-sos-tour-2023-billboard-1548.jpg?w=942&h=623&crop=1",
        "https://media.pitchfork.com/photos/5e613720ba0b8d0009efd2b2/1:1/w_800,h_800,c_limit/badbunnyheader.jpg",
        "https://www.googobits.com/wp-content/uploads/2018/06/blues-music.jpg",
    ];

    const [popularAlbums, setPopularAlbums] = useState([]);
    const [imgPopular, setImgPopular] = useState([]);

    const [recentAlbums, setRecentAlbums] = useState([]);
    const [imgRecent, setImgRecent] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        const fetchPopularAlbums = async () => {
            try {
                const response = await axios.post('/get_popular_albums', {});
                const data = response.data;
                
                const albumNames = data.map(album => album.album_name);
                const albumImages = data.map(album => album.album_cover);

                setPopularAlbums(albumNames);
                setImgPopular(albumImages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPopularAlbums();
    }, []);

    useEffect(() => {
        const fetchRecentAlbums = async () => {
            try {
                const response = await axios.post('/get_recent', {});
                const data = response.data;
                
                const albumNames = data.map(album => album.album_name);
                const albumImages = data.map(album => album.album_cover);

                setRecentAlbums(albumNames);
                setImgRecent(albumImages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecentAlbums();
    }, []);

    return (
        <>
            <Header />
            
            <div className="swiper-container" style={{height:'300px'}}>
                <h3>Albums By Genre</h3>
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
                        <SwiperSlide key={index} onClick={() => nav(`/${genre}`)}>
                            <SlideWithImage genre={musicGenresAllChars[index]} imageURL={genreImages[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-container" style={{height:'300px'}}>
                <h3>Popular Albums</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{ clickable: true }}
                    style={{height:'300px'}}
                >
                    {popularAlbums.map((album, index) => (
                        <SwiperSlide key={index} onClick={() => nav(`/Albums/${encodeURIComponent(album)}`)}>
                            <SlideWithImage genre={album} imageURL={imgPopular[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-container" style={{height:'300px'}}>
                <h3>Recent Albums</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{ clickable: true }}
                    style={{height:'300px'}}
                >
                    {recentAlbums.map((album, index) => (
                        <SwiperSlide key={index} onClick={() => nav(`/Albums/${encodeURIComponent(album)}`)}>
                            <SlideWithImage genre={album} imageURL={imgRecent[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Albums;