import './App.css';
import {Nav, Navbar} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tripstogram</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#">SignUp</Nav.Link>
            <Nav.Link href="#deets">LogIn</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
