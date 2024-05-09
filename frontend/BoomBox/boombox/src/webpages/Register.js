import {React, useState, useEffect, useRef, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Register.css"
import axios from 'axios';
import Header from "./Header.js"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

const Register = () => {
    const [emailInput, setEmailInput] = useState("")
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [validText, setValidText] = useState("")
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

        setEmailInput(event.target.elements.email.value)
        setUsernameInput(event.target.elements.username.value)
        setPasswordInput(event.target.elements.password.value)

        if (emailInput.length < 7 || emailInput.length > 100) {
            setValidText("Invalid email")
            return
        }
        else if (usernameInput.length < 3 || usernameInput > 20) {
            setValidText("Username must be 3-20 characters")
            return
        }
        else if (passwordInput.length < 8 || passwordInput.length > 30) {
            setValidText("Password must be 8-30 characters")
            return
        }

        axios.post("/acct/create_acct", {
            user_email: emailInput,
            username: usernameInput,
            user_password: passwordInput
        }).then(response => {
            console.log(response)
            window.localStorage.setItem("loggedIn", true)
            window.localStorage.setItem("user", usernameInput)
            window.localStorage.setItem("userID", response.data.result.account_id)
            navigate("/")
        }).catch(error => {
            if (error.response.status === 400) {
                if (error.response.data.type === 1) setValidText("Invalid email")
                else if (error.response.data.type === 2) setValidText("Account already exists")
            } else {
                console.error(error)
            }
        })
    }

    return (  
        <>
            <Header/>
            <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h3>Register</h3> 
                    <div className="register-input">
                        <h6>Email</h6>
                        <input name="email" onInput={(event) => setEmailInput(event.target.value)}/>
                    </div>
                    <div className="register-input">
                        <h6>Username</h6>
                        <input name="username" onInput={(event) => setUsernameInput(event.target.value)}/>
                    </div>
                    <div className="register-input">
                        <h6>Password</h6>
                        <input type={type} name="password" value={passwordInput} onInput={(event) => setPasswordInput(event.target.value)}/>
                        <span class="flex justify-around items-center" onClick={handleToggle}>
                            <Icon icon={icon} size={25}/>
                        </span>
                    </div>
                    <br/>
                    <button type="submit">Register</button>
                </form>
            </div>
            <p className="valid-text">{validText}</p> 
        </>
    );
}
 
export default Register;