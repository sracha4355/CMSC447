import React from "react";
<<<<<<< Updated upstream
=======
import './SlideWithImageArtist.css'
>>>>>>> Stashed changes

const SlideWithImageArtist = ({ album , imageURL}) => {
    return (
        <div className="slide-with-image">
            <div className="image-container">
<<<<<<< Updated upstream
                <img src= {imageURL} alt="genre_image" style={{width : '125px', height: '125px', borderRadius:'20%'}} />
=======
                <img src= {imageURL} alt="genre_image" style={{width : '125px', height: '125px', borderRadius:'20%'}} id="album-image" />
>>>>>>> Stashed changes
            </div>
            <div className="genre-name" style={{fontFamily: 'Bungee, sans-serif'}}>{album}</div>
        </div>
    );
}

export default SlideWithImageArtist;