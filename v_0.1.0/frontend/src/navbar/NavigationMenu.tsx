import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const NavigationMenu = () => {
    return(
    <Navbar bg="primary" expand="lg" variant="dark">
        
          {/* <Navbar.Brand href="http://localhost:3000">TL Timing</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* class me-auto : content to the right, without: to the left */}
            <Nav className="me-auto">
              
              <Nav.Link className = "navBarLevel" href="http://localhost:3000">Etusivu</Nav.Link>
              <Nav.Link className = "navBarLevel" href="http://localhost:3000/events">Tulevat tapahtumat</Nav.Link>
              <Nav.Link className = "navBarLevel" href="http://localhost:3000/results">Tulokset</Nav.Link>
              
              
            </Nav>
            
          </Navbar.Collapse>
        
      </Navbar>
      
      )
}
    
   
  export default NavigationMenu;