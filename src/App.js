import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import Navbar from '../src/components/navbar/Navbar';
import Sidebar from '../src/components/navbar/sidebar/Sidebar';
import SignUpPage from './Pages/SignUpPage';
import NavbarTwo from './components/navbar/NavbarTwo';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Navbar toggle={toggle} isOpen={isOpen} />
        <NavbarTwo toggle={toggle} isOpen={isOpen} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" component={LandingPage} exact={true} />
          <Route path="/log-in" component={LoginPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/edit-profile" />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
