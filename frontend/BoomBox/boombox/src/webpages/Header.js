import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import 'hover.css/css/hover-min.css';

const Header = () => {
  return (
    <>
    <div id = 'logo'>Boombox</div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="Artists" >Artists</Nav.Link>
            <Nav.Link href="Songs" >Songs</Nav.Link>
            <Nav.Link href="Albums" >Albums</Nav.Link>
            <Nav.Link href="Playlists" >Playlists</Nav.Link>
            <Nav.Link href="Reviews" >Reviews</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header
