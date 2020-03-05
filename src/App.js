import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactUs from './components/pages/ContactUs'
import AboutUs from './components/pages/AboutUs'
import TermsAndConditions from './components/pages/TermsAndConditions'
import './App.css';
import CookiePolicy from './components/pages/CookiePolicy';
import PartnershipAffiliation from './components/pages/PartnershipAffiliation';
import SearchPage from './components/pages/SearchPage';
import Admin from './components/pages/Admin';
import CardPage from './components/pages/CardPage';
const App =() => {
  return (
    <Router>
      <div className="App full-width " >
          <div>
          <Switch>
            
              //public
          
            <Route exact path='/' component={Home} />
            <Route exact path='/cardPage' component={CardPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={SignupPage} />
            <Route exact path='/aboutUs' component={AboutUs} />
            <Route exact path='/partnerAffiliation' component={PartnershipAffiliation} />
            <Route exact path='/termsAndConditions' component={TermsAndConditions} />
            <Route exact path='/cookiePolicy' component={CookiePolicy} />
            <Route exact path='/contactUs' component={ContactUs} />
            <Route exact path='/search' component={SearchPage} />
            
              //private
            
            <Route exact path='/admin' component={Admin} />
          </Switch>
          </div>
      </div>
    </Router>
  );
}
export default App;
