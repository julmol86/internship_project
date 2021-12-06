import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from "react";

const NavigationTop = () => {
    return(
    <Navbar >
        
          <Navbar.Brand className = "navBarTop" href="http://localhost:3000">TL Timing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              
              
              
            </Nav>
            <Nav >
                <Nav.Link className = "navBarTop" href="http://localhost:3000/contacts">Yhteystiedot</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
      
      )
}
    
   
export default NavigationTop;
