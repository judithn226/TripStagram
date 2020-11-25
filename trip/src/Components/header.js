import '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <div className="App">
          <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Trippin'</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Nav.Link href="#signup">SignUp</Nav.Link>
                <Nav.Link href="#login">LogIn</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
}
export default Navbar;