import React from "react";

const SlideWithImageArtist = ({ album , imageURL}) => {
    return (
        <div className="slide-with-image">
            <div className="image-container">
                <img src= {imageURL} alt="genre_image" style={{width : '125px', height: '125px', borderRadius:'20%'}} />
            </div>
            <div className="genre-name" style={{fontFamily: 'Bungee, sans-serif'}}>{album}</div>
        </div>
    );
}

export default SlideWithImageArtist;