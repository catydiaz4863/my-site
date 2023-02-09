import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './components.css';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className='nav-bar'>
          <Navbar.Brand href="#home">@_thisiscat_</Navbar.Brand>
          <Nav className="me-right">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Languages">Languages</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;