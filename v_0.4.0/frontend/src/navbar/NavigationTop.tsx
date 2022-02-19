import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { UserContext, userContextEmpty } from '../UserContext';

// notification library imports
import { toast } from 'react-toastify';

const NavigationTop = () => {
  const { t, i18n } = useTranslation();
  const notUsedLang = i18n.language === 'fi' ? 'en' : 'fi'
  const location = useLocation();
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const changeLanguageHandler = () => {
    i18n.changeLanguage(notUsedLang)
    localStorage.setItem("language", i18n.language)
  }

  const signOut = () => {
    setUserData(userContextEmpty)
    navigate("/signin");
    toast.success(t('admin.logout.success'), {
      position: "top-center",
    });
  }

  const SignInOut = () => {
    return userData.loggedIn && (<>
      <span>{t('navbartop.loggedin.message') + ', ' + userData.login}</span>&nbsp;&nbsp;&nbsp;
      <Button onClick={signOut}>{t('navbartop.loggedin.signout')}</Button>
    </>)
  }

  return(
    <Navbar >
        
          <Navbar.Brand className = "navBarTop">
            {userData.loggedIn ? <div>TL Timing</div> : <Link to="/">TL Timing</Link>}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Button onClick={changeLanguageHandler}>{notUsedLang}</Button>
            </Nav>
            <Nav >
              <Nav.Link className = "navBarTop">
                <SignInOut/>
              </Nav.Link>
            </Nav>
            {!userData.loggedIn && (
              <Nav >
                  <Nav.Link className = "navBarTop">
                    <Link to="/contacts">{t('navbartop.contact')}</Link>
                  </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        
      </Navbar>
      
      )
}

export default NavigationTop;
