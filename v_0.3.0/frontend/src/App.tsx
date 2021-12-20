import React, { useContext } from 'react';
import Home from './pages/user/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavigationTop from './navbar/NavigationTop';
import NavigationMenu from './navbar/NavigationMenu';
import Table1 from './pages/user/Table';
import Events from './pages/user/Events';
import RegistrationList from './pages/admin/RegistrationList';
import RegistrationSuccess from './pages/user/RegistrationSuccess';
import PageNotFound from './pages/PageNotFound'
import SignIn from './pages/admin/SignIn';
import { UserContext } from './UserContext';

// notification library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { userData } = useContext(UserContext);

  return (
  <>
    <NavigationTop/>
    <NavigationMenu/>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/events" element={ <div>Tulossa!!!
            <Events/>
          </div> } />
      <Route path="/results" element={ <div>Juoksukilpailun tulokset
            <Table1/>
          </div> } />
      <Route path="/contacts" element={ <div>call me</div> } />
      <Route path="/registrationsuccess" element={ <RegistrationSuccess/> } />
      <Route path="/admin/registrationlist" element={ userData.loggedIn ? <RegistrationList/> : <SignIn/> } />
      <Route path="/admin/signin" element={ <SignIn/> } />
      <Route path="*" element={ <PageNotFound/> } />
    </Routes> 
    <ToastContainer />
  </>
  )
}

export default App;
