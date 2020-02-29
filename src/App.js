import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import Navbar from './components/layout/NavBar.js'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactUs from './components/pages/ContactUs'
import AboutUs from './components/pages/AboutUs'
import TermsAndConditions from './components/pages/TermsAndConditions'
import './App.css';
import CookiePolicy from './components/pages/CookiePolicy';
import PartnershipAffiliation from './components/pages/PartnershipAffiliation';
import SearchPage from './components/pages/SearchPage';

const App =() => {
  return (
    <Router>
      <div className="App full-width ">
          <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SignupPage} />

            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/partner-affiliation' component={PartnershipAffiliation} />
            <Route exact path='/terms-and-conditions' component={TermsAndConditions} />
            <Route exact path='/cookie-policy' component={CookiePolicy} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Route exact path='/search' component={SearchPage} />
             
          </Switch>
          </div>
          
        
      </div>
    </Router>
  );
}

export default App;
