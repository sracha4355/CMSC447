import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import 'hover.css/css/hover-min.css';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import React, {useState} from "react";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const loggedIn = window.localStorage.getItem("loggedIn")
  const user = window.localStorage.getItem("user")



  
  
  const getLoginString = () => {
    if (loggedIn.localeCompare("true") === 0) return user
    return "Login"
  }

  const search = async () =>{
      navigate(`/Search?q=${encodeURIComponent(searchQuery)}`)
  }
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchQuery) {
      search(event);
    }
  };

  return (
    <>
    <div id = 'logo'>
      <Form.Control 
      type="text" 
      placeholder="Search" 
      className="ms-auto"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} 
      onKeyDown={handleKeyDown}/>
      <div>
        <a href="http://localhost:3000" style={{textDecoration:'none', color:'inherit'}}>Boombox</a>
      </div>
      <div id = 'login'>
        <a onClick={ () => {
          if (loggedIn.localeCompare("true") === 0) {
              navigate(`/Acct/${encodeURIComponent(user)}`)
          } else {
              navigate("/Login")
          }
        }}>{getLoginString()}</a>
      </div>
    </div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/Artists" >Artists</Nav.Link>
            <Nav.Link href="/Songs" >Songs</Nav.Link>
            <Nav.Link href="/Albums" >Albums</Nav.Link>
            <Nav.Link href="/Playlists" >Playlists</Nav.Link>
            {/*<Nav.Link href="/Reviews" >Reviews</Nav.Link>*/}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header
