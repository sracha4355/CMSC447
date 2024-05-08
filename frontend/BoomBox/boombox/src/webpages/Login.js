import {React, useState, useEffect, useRef, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Login.css"
import Header from "./Header.js";
import axios from 'axios';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

const Login = () => {
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const navigate = useNavigate()

    const handleToggle = () => {
        if (type==="password"){
           setIcon(eye);
           setType("text")
        } else {
           setIcon(eyeOff)
           setType("password")
        }
     }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setUsernameInput(event.target.elements.username.value)
        setPasswordInput(event.target.elements.password.value)

        axios.post("/acct/get_acct", {
            acct_username: usernameInput
        }).then(response => {
            if (response.data.result.length != 1 || passwordInput.localeCompare(response.data.result[0].password_hash)) return
            window.localStorage.setItem("loggedIn", true)
            window.localStorage.setItem("user", response.data.result[0].username)
            window.localStorage.setItem("userID", response.data.result[0].account_id)
            navigate("/")
        }).catch(error => console.log(error))
    }

    return ( 
        <>
            <Header/>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <div className="login-input">
                        <h6>Username:</h6>
                        <input name="username" onInput={(event) => setUsernameInput(event.target.value)}/>
                    </div>
                    <div className="login-input">
                        <h6>Password:</h6>
                        <input type={type} name="password" value={passwordInput} onInput={(event) => setPasswordInput(event.target.value)}/>
                        <span class="flex justify-around items-center" onClick={handleToggle}>
                            <Icon icon={icon} size={25}/>
                        </span>
                    </div>
                    <br/>
                    <button type="submit">Login</button>
                </form>
                <h6 className="register-text">Don't have an account?</h6>
                <button type="submit" onClick={() => navigate("/register")}>Register</button>
            </div>
        </>
    );
}
 
export default Login;