import React from "react";

const SlideWithImage = ({ genre }) => {
    return (
        <div className="slide-with-image">
            <div className="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" alt="Graduation-Kanye-West" />
            </div>
            <div className="genre-name">{genre}</div>
        </div>
    );
}

export default SlideWithImage;