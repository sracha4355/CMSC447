import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from './Header';
import "./ReviewDetails.css"
import acct_picture from "./../profile_pic_default.png"
import ReactLoading from "react-loading";

const ReviewDetails = () => {
    const { musicID } = useParams()
    const [loading, setLoading] = useState(true);
    const [reviewTotal, setReviewTotal] = useState(0)
    const [reviews, setReviews] = useState([])
    
    const [isAlbum, setIsAlbum] = useState(false)
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [artists, setArtists] = useState("")
    const [releaseDate, setReleaseDate] = useState('')

    const [review, setReview] = useState("")

    const effectRan  = useRef(false)

    useEffect(() => {
        const checkFuncMusic = async () => {
            axios.post("/music/get_music", {
                music_id: musicID
            }).then(response => {
                setIsAlbum(response.data.result.is_album)
                setImage(response.data.result.cover)
                setName(response.data.result.name)
                setArtists(response.data.result.artists)
                setReleaseDate(response.data.result.release_date)
            }).catch(error => console.log(error))
        }

        const checkFuncReview = async () => {
            axios.post("/review/get_reviews", {
                method: "music",
                music_id: musicID
            }).then(response => {
                setReviews(response.data.result)
                setLoading(false)
            }).catch(error => console.error(error))
        }

        if (effectRan.current === false) {
            checkFuncMusic()
            checkFuncReview()
            return () => effectRan.current = true
        }
    })

    const musicInfo = () => {
        if (isAlbum === false) {
            return (
                <>
                    <div className="music-container">
                        <img className="music-cover-single" src={image}></img>
                        <p>{name}</p>
                        <div className="music-artists-release">
                            <p>Artist(s): {artists}</p>
                            <p>Release Date: {releaseDate}</p>
                        </div>
                    </div>
                </>
            )
        }

        return (
            <>
               <div className="music-container">
                    <img className="music-cover-album" src={image}></img>
                    <p>{name}</p>
                    <div className="music-artists-release">
                        <p>Artist(s): {artists}</p>
                        <p>Release Date: {releaseDate}</p>
                    </div>
                </div>
            </>
        )
    }

    const deleteReview = (event) => {
        event.preventDefault()
        const review_id = event.target.id // dirty way of getting review_id but bear with me

        axios.post("/review/delete_review", {
            review_id: review_id
        }).then(_ => {
            window.location.reload()
        }).catch(error => console.error(error))
    }

    const deleteButton = (acct_username, review_id) => {
        if (window.localStorage.getItem("user").localeCompare(acct_username) === 0) {
            return (
                <>
                    <form id={review_id} onSubmit={deleteReview}>
                        <button type="submit">Delete</button>
                    </form> 
                </>
            )
        }
        return (<></>)
    }

    const reviewItem = (review) => (
        <>
            <div className="review-item">
                <div className="review-row">
                    <div className="review-item-user">
                        <img src={acct_picture} className="review-item-user-picture"/>
                        <a href={`/acct/${review.account_username}`}>{review.account_username}</a>
                    </div>
                    <div className="review-item-text">
                        <p>{review.review}</p>
                    </div>
                </div>
                {deleteButton(review.account_username, review.review_id)}
            </div>
            <br/>
        </>
    )

    const reviewItems = () => {
        if (reviews.length === 0) return (
            <>
                <div className="review-list">
                    <p>There are no reviews yet!</p>
                </div>
            </> 
            )

        return (
        <>
            <div className="review-list">
                <p>{reviews.length} reviews</p>
                {reviews.map(review => reviewItem(review))}
            </div>
        </>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setReview(event.target.elements.review.value)

        if (review.length == 0) {
            return
        }

        axios.post("/review/create_review", {
            account_id: window.localStorage.getItem("userID"),
            music_id: musicID,
            review: review
        }).then(_ => {
            window.location.reload()
        }).catch(error => console.error(error))
    }

    const reviewBox = () => {
        if (window.localStorage.getItem("loggedIn").localeCompare("true") === 0) return (
            <form onSubmit={handleSubmit}>
                <p>Leave a review:</p>
                <textarea className="review-box" name="review" rows="4" onChange={(event) => setReview(event.target.value)}/>
                <button className="review-box-submit" type="submit">Submit</button>
            </form>
        )

        return (<></>)
    }

    if (loading) {
        return <div style={{position: 'absolute', right:'50vw', bottom: '50vh'}}>
          <ReactLoading type="cubes" color="#df03fc" height={100} width={50} />
        </div>; // You can replace this with a more elaborate loading screen component
    }

    return ( 
        <>
            <Header/>
            <div className="review-container">
                {musicInfo()}
                <div className="reviews-column">
                    {reviewBox()}
                    {reviewItems()}
                </div>
            </div>
        </>
     );
}
 
export default ReviewDetails;