import {React, useState, useEffect, useRef} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import { FcLike} from "react-icons/fc";
import { RiDislikeFill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import axios from 'axios';
import ReactLoading from "react-loading";
import acct_picture from "./../profile_pic_default.png"


const AcctDetails = () => {
    const { user } = useParams()
    const [username, setUsername] = useState("")
    const [followers, setFollowers] = useState(0)
    const [following, setFollowing] = useState(0)
    const [creationDate, setCreationDate] = useState("")
    const [loading, setLoading] = useState(true);

    const effectRan = useRef(false)

    const navigate = useNavigate()

    useEffect(() => {
        const checkFunc = async () => {
            axios.post("/acct/get_acct", {
                acct_username: user
            }).then(response => {
                console.log("whuh?")
                console.log(response)
                if (response.data.result.length != 1) return
                setUsername(response.data.result[0].username)
                /*setFollowers(response.data.result[0].follower_count)
                setFollowing(response.data.result[0].following_count)*/
                setCreationDate(response.data.result[0].creationDate)
                setLoading(false)
            }).catch(error => console.error(error))
        }
        
        if (effectRan.current === false) {
            checkFunc()
            return () => effectRan.current = true
        }
    })


    if (loading) {
        return <div style={{position: 'absolute', right:'50vw', bottom: '50vh'}}>
          <ReactLoading type="cubes" color="#df03fc" height={100} width={50} />
        </div>; // You can replace this with a more elaborate loading screen component
    }

    function LogoutButton() {
        const loggedIn = window.localStorage.getItem("loggedIn")
        const localUser = window.localStorage.getItem("user")
        if (loggedIn.localeCompare("true") === 0 && localUser.localeCompare(user) === 0) {
            return (
                <button onClick={() => {
                    window.localStorage.setItem("loggedIn", false)
                    window.localStorage.setItem("user", "")
                    navigate("/")
                }}>Logout</button>
            )
        } 
        return (<></>)
    }

    return (  
        <>
        <Header />
        <Container>
        <Row>
        <div style={{ position: 'absolute', left: '0vw', top: '12vh', textAlign: 'center', width:'30vw' }}>
            <img src={acct_picture} alt="acct-picture" style={{ width: '20vw', height: '20vw', marginTop: '15px', borderRadius: '50%'}}/>
            <p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>{username}</p>
        </div>
        <div style={{ position: 'absolute', right: '19vw', bottom: '5%', textAlign: 'center', width:'10vw' }}>
          <button style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <BiCommentDetail style={{ fontSize: '3rem' }}/><p style={{fontFamily:'bungee'}}></p>
        </button>
        </div>
        <div style={{ position: 'absolute', left: '-35vw', bottom: '150px', textAlign: 'center' }}> 
            {/*<p style={{ fontSize: '16px', fontFamily: 'Bungee, sans-serif', marginTop: '5px' }}>Creation Date: {creationDate} </p>*/}
            <LogoutButton/>
        </div>
        </Row>
        </Container>
        <div style={{ position: 'absolute', right: '50vw', top: '250px',textAlign:'center'}}>
        </div>
        <div style={{position: 'absolute', left: '65vw', top: '250px', textAlign:'center'}}>
      </div>
    </>
    );
}
 
export default AcctDetails;