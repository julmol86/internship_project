import React, { useContext } from 'react';
import Home from './pages/user/Home';
import {
  Routes,
  Route
} from "react-router-dom";
import NavigationTop from './navbar/NavigationTop';
import NavigationMenu from './navbar/NavigationMenu';
import Table1 from './pages/user/Table';
import CreateOrganization from './pages/admin/CreateOrganization';
import Events from './pages/user/Events';
import HomePageAdmin from './pages/admin/HomePageAdmin';
import RegistrationList from './pages/admin/RegistrationList';
import UsersList from './pages/admin/UsersList';
import RegistrationSuccess from './pages/user/RegistrationSuccess';
import PageNotFound from './pages/PageNotFound'
import SignIn from './pages/SignIn';
import { UserContext } from './UserContext';
import HomePageOrg from './pages/organization/HomePageOrg';
import CreateEvent from './pages/admin/CreateEvent';

// notification library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Registration from './pages/user/Registration';
import RegistrationListPublic from './pages/user/RegistrationListPublic';
import EventList from './pages/admin/EventList';
import RegEventList from './pages/admin/RegEventList';


const App = () => {
  const { userData } = useContext(UserContext);

  return (
  <>
    <NavigationTop/>
    {!userData.loggedIn && <NavigationMenu/>}
    <Routes>
    {!userData.loggedIn &&
      <>      
        <Route path="/" element={ <Home/>} />
        <Route path="/events" element={ <div>Tulossa!!!
              <Events/>
            </div> } />
        <Route path="/results" element={ <div>Juoksukilpailun tulokset
              <Table1/>
            </div> } />
        <Route path="/contacts" element={ <div>contact information</div> } />
        <Route path="/registrationsuccess" element={ <RegistrationSuccess/> } />
        <Route path="/event/:eventId/register" element={ <Registration/> } />
        <Route path="/event/:eventId/registrationlist" element={ <RegistrationListPublic/> } />
      </>
    }

      <Route path="/signin" element={ <SignIn/> } />

      <Route path="/admin/regeventlist" element={ userData.loggedIn ? userData.role === 'ADMINISTRATOR' ? <RegEventList/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />
      <Route path="/admin/event/:eventId/registrationlist" element={ userData.loggedIn ? userData.role === 'ADMINISTRATOR' ? <RegistrationList/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />
      <Route path="/admin/userslist" element={ userData.loggedIn ? userData.role === 'ADMINISTRATOR' ? <UsersList/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />
      <Route path="/admin/eventlist" element={ userData.loggedIn ? userData.role === 'ADMINISTRATOR' ? <EventList/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />
      <Route path="/admin/homepage" element={ userData.loggedIn ? userData.role === 'ADMINISTRATOR' ? <HomePageAdmin/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />
      <Route path="/admin/createorganization" element={ userData.loggedIn ? userData.role === 'ADMINISTRATOR' ? <CreateOrganization/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />
      <Route path="/admin/createevent" element={ userData.loggedIn ? userData.role === 'ADMINISTRATOR' ? <CreateEvent/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />

      <Route path="/organization/homepage" element={ userData.loggedIn ? userData.role === 'ORGANIZATION' ? <HomePageOrg/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />
      <Route path="/organization/regeventlist" element={ userData.loggedIn ? userData.role === 'ORGANIZATION' ? <RegEventList/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />
      <Route path="/organization/event/:eventId/registrationlist" element={ userData.loggedIn ? userData.role === 'ORGANIZATION' ? <RegistrationList/> : <div>Ei ole oikeuksia</div> : <SignIn/> } />
      
      <Route path="*" element={ <PageNotFound/> } />
    </Routes> 
    <ToastContainer />
  </>
  )
}

export default App;
