import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './images/audiowaves.jpg'

const Slider = () =>{
return(
        <Carousel style={{ height: 'auto' }}>
            <Carousel.Item>
                <img 
                src="https://wallpaperswide.com/download/synthwave_background-wallpaper-1920x540.jpg"
                style={{ width: '100%', height: 'auto' }}
                className="d-block mx-auto"
                alt="First slide" />
                <Carousel.Caption>
                <p>Welcome to Boombox where you have a say on music and artists</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                src="https://wallpaperswide.com/download/amazing_asiatic_landscape_art-wallpaper-1920x540.jpg"
                style={{ width: '100%', height: 'auto' }}
                className="d-block mx-auto"
                alt="Second slide" />
                <Carousel.Caption>
                <p>Enhance your playlist through discovering new tracks.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                src= {image}
                style={{ width: '100%', height: 'auto' }}
                className="d-block mx-auto"
                alt="Third slide" />
                <Carousel.Caption>

                <p>
                    Let your voice be heard through reviews.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider