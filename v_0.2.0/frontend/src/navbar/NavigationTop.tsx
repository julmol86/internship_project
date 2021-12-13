import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom'
import { UserContext } from '../UserContext';

const NavigationTop = () => {
  const { t, i18n } = useTranslation();
  const notUsedLang = i18n.language === 'FI' ? 'EN' : 'FI'
  const location = useLocation();
  const { userData } = useContext(UserContext);
  console.log(userData)

  const changeLanguageHandler = () => {
    i18n.changeLanguage(notUsedLang)
  }



  return(
    <Navbar >
        
          <Navbar.Brand className = "navBarTop" href="http://localhost:3000">TL Timing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Button onClick={changeLanguageHandler}>{notUsedLang}</Button>
            </Nav>
            {location.pathname.includes('/admin/') && (
              <Nav >
                <Nav.Link className = "navBarTop">
                  <SignInOut/>
                </Nav.Link>
              </Nav>
            )}
            <Nav >
                <Nav.Link className = "navBarTop">
                  <Link to="/contacts">{t('navbartop.contact')}</Link>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
      
      )
}

export default NavigationTop;
