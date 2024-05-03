import React, { useState, useEffect } from "react";
import './Artists.css';
import Header from "./Header.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SlideWithImage from "./SlideWithImage";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Artists = () => {
    const musicGenres = ["Rock", "Pop", "Rap", "Jazz", "Classical", "Electronic", "Country", "RandB", "Latino", "Blues"];
    const musicGenresAllChars = ["Rock", "Pop", "Rap", "Jazz", "Classical", "Electronic", "Country", "R&B", "Latino", "Blues"];
    const genreImages = [
        "https://media.npr.org/assets/img/2024/01/29/green_day_hires-13_alice-baxley-applemusic-52f7fabf9f5d0149159e467aafc4919d2eb65a40-s1100-c50.jpg",
        "https://upload.wikimedia.org/wikipedia/en/7/7e/Ariana_Grande_-_Eternal_Sunshine.png",
        "https://charts-static.billboard.com/img/1988/03/future-f8b-344x344.jpg",
        "https://cdn.shopify.com/s/files/1/1691/2535/collections/Louis_Armstrong.jpg?v=1495806225",
        "https://hips.hearstapps.com/hmg-prod/images/beethoven-600x600.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        "https://resources.tidal.com/images/2f02f896/916a/4fc8/9041/870702657180/750x750.jpg",
        "https://yt3.googleusercontent.com/m5LpRVgSuI_KOny27BMnYcINjmYmSgvGdkd-I8QNtvUnsTWxmHIkrDHBd2w9U_-BkSw8WzlXXOc=s900-c-k-c0x00ffffff-no-rj",
        "https://www.madametussauds.com/berlin/media/xt4po5zr/_dsc7449-rihanna-mtb-2023-ff.jpg?center=0.35020046971120222,0.50250498708598845&mode=crop&format=webp&quality=80&width=700&height=700",
        "https://i.scdn.co/image/ab6761610000e5eb00bfcedce3845ae969c8277a",
        "https://img.apmcdn.org/ec1092fd4c13e971a166eb2fbafb1c7da637b0d6/uncropped/c9f9f5-20190528-b-b-king-performing-in-2006.jpg",
    ];

    const [popularArtists, setPopularArtists] = useState([]);
    const [imgPopular, setImgPopular] = useState([]);
<<<<<<< Updated upstream

    const [recentArtists, setRecentArtists] = useState([]);
    const [imgRecent, setImgRecent] = useState([]);
=======
    const [popularURI, setPopularURI] = useState([]);

    const [recentArtists, setRecentArtists] = useState([]);
    const [imgRecent, setImgRecent] = useState([]);
    const [recentURI, setRecentURI] = useState([]);
>>>>>>> Stashed changes

    const nav = useNavigate();

    useEffect(() => {
        const fetchPopularArtists = async () => {
            try {
<<<<<<< Updated upstream
                const response = await axios.post('/get_popular_artists', {});
=======
                const response = await axios.get('localData/get_popular_artists', {});
>>>>>>> Stashed changes
                const data = response.data;
                
                const artistNames = data.map(artist => artist.artist_name);
                const artistImages = data.map(artist => artist.artist_cover);
<<<<<<< Updated upstream

                setPopularArtists(artistNames);
                setImgPopular(artistImages);
=======
                const artistURIs = data.map(artist => artist.uid);

                setPopularArtists(artistNames);
                setImgPopular(artistImages);
                setPopularURI(artistURIs);
>>>>>>> Stashed changes
            } catch (error) {
                console.error(error);
            }
        };

        fetchPopularArtists();
    }, []);

    useEffect(() => {
        const fetchRecentArtists = async () => {
            try {
<<<<<<< Updated upstream
                const response = await axios.post('/get_recent_artists', {});
=======
                const response = await axios.get('localData/get_recent_artists', {});
>>>>>>> Stashed changes
                const data = response.data;
                
                const artistNames = data.map(artist => artist.artist_name);
                const artistImages = data.map(artist => artist.artist_image);
<<<<<<< Updated upstream

                setRecentArtists(artistNames);
                setImgRecent(artistImages);
=======
                const artistURIs = data.map(artist => artist.uid);

                setRecentArtists(artistNames);
                setImgRecent(artistImages);
                setRecentURI(artistURIs);
>>>>>>> Stashed changes
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecentArtists();
    }, []);

    return (
        <>
            <Header />
            
            <div className="swiper-container" style={{height:'300px'}}>
                <h3>Artists By Genre</h3>
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
                        <SwiperSlide key={index} onClick={() => nav(`Artists/${genre}`)}>
                            <SlideWithImage genre={musicGenresAllChars[index]} imageURL={genreImages[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-container" style={{height:'300px'}}>
                <h3>Popular Artists</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{ clickable: true }}
                    style={{height:'300px'}}
                >
                    {popularArtists.map((artist, index) => (
<<<<<<< Updated upstream
                        <SwiperSlide key={index} onClick={() => nav(`/Artists/${encodeURIComponent(artist)}`)}>
=======
                        <SwiperSlide key={index} onClick={() => nav(`/Artists/${encodeURIComponent(popularURI[index])}`)}>
>>>>>>> Stashed changes
                            <SlideWithImage genre={artist} imageURL={imgPopular[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-container" style={{height:'300px'}}>
                <h3>Recent Artists</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{ clickable: true }}
                    style={{height:'300px'}}
                >
                    {recentArtists.map((artist, index) => (
<<<<<<< Updated upstream
                        <SwiperSlide key={index} onClick={() => nav(`/Artists/${encodeURIComponent(artist)}`)}>
=======
                        <SwiperSlide key={index} onClick={() => nav(`/Artists/${encodeURIComponent(recentURI[index])}`)}>
>>>>>>> Stashed changes
                            <SlideWithImage genre={artist} imageURL={imgRecent[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Artists;