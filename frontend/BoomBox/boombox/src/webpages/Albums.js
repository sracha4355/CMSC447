import React from "react";
import './Albums.css'
import Header from "./Header.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SlideWithImage from "./SlideWithImage";
import './Albums.css'

const Albums = () =>{

    var musicGenres = ["Rock", "Pop", "Hip Hop", "Jazz", "Classical", "Electronic", "Country", "R&B", "Reggae", "Blues"];
    var popularAlbums = ["Graduation","Graduation","Graduation","Graduation","Graduation","Graduation","Graduation","Graduation","Graduation", "Graduation"];
    var recentAlbums = ["Graduation","Graduation","Graduation","Graduation","Graduation","Graduation","Graduation","Graduation","Graduation", "Graduation"];

return(
<>
    <Header/>
    
    <div className="swiper-container">
    <h3>Albums By Genre</h3>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            loop = {true}
            pagination={{
                clickable: true,
              }}
        >
        {musicGenres.map((genre,index) =>(
            <SwiperSlide key={index}>
                <SlideWithImage genre={genre} />
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
    <div className="swiper-container">
    <h3>Popular Albums</h3>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            loop = {true}
            pagination={{
                clickable: true,
              }}
        >
        {popularAlbums.map((genre,index) =>(
            <SwiperSlide key={index}>
                 <SlideWithImage genre={genre} />
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
    <div className="swiper-container">
    <h3>Recent Albums</h3>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            loop = {true}
            pagination={{
                clickable: true,
              }}
        >
        {recentAlbums.map((genre,index) =>(
            <SwiperSlide key={index}>
                 <SlideWithImage genre={genre} />
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
</>    
)
}



export default Albums