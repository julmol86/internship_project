import React from 'react';
import Home from './pages/user/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationTop from './navbar/NavigationTop';
import NavigationMenu from './navbar/NavigationMenu';
import Table1 from './pages/user/Table';
import Events from './pages/user/Events';
import RegistrationList from './pages/admin/RegistrationList';
import RegistrationSuccess from './pages/user/RegistrationSuccess';




const App = () => (
  <>
    <Router>
    <div>
      <NavigationTop/>
      <NavigationMenu/>

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events">
          <div>Tulossa!!!
            <Events/>
          </div>
        </Route>
        <Route path="/results">
          <div>Juoksukilpailun tulokset
            <Table1/>
          </div>
        </Route>
        <Route path="/contacts">
          <div>call me</div>
        </Route>
        <Route path="/registrationsuccess">
          <RegistrationSuccess/>
        </Route>
        <Route path="/admin/registrationlist">

            <RegistrationList/>

        </Route>
       
      </Switch>
    </div>
  </Router>
  
  
  </>
)

export default App;
