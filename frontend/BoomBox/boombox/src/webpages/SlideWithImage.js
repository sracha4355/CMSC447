import React from "react";

const SlideWithImage = ({ genre , imageURL}) => {
    return (
        <div className="slide-with-image">
            <div className="image-container">
                <img src= {imageURL} alt="genre_image" style={{width : '200px', height: '200px', borderRadius:'20%'}} />
            </div>
            <div className="genre-name">{genre}</div>
        </div>
    );
}

export default SlideWithImage;