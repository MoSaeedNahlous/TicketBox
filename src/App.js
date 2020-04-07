import React from 'react';
import {BrowserRouter as Router ,Route,Switch,HashRouter} from 'react-router-dom'
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


 
import LoginAdmin from './components/pages/admin pages/LoginAdmin';
import NotFound from './components/pages/NotFound';
import AddEmpPage from './components/pages/admin pages/AddEmpPage';
import DeleteEmpPage from './components/pages/admin pages/DeleteEmpPage';
import DeleteUserPage from './components/pages/admin pages/DeleteUserPage';
import AddGamePage from './components/pages/admin pages/AddGamePage';
import DeleteGamePage from './components/pages/admin pages/DeleteGamePage';
import AddTicketPage from './components/pages/admin pages/AddTicketPage';
import DeleteTicketPage from './components/pages/admin pages/DeleteTicketPage';
import AddStadiumPage from './components/pages/admin pages/AddStadiumPage';

import Ticket from './components/layout/admin Forms/Tickets/Ticket';
import ForgetPassword from './components/pages/ForgetPassword';
import Teams from './components/pages/Teams';
import Stadiums from './components/pages/Stadiums';
import StadiumPage from './components/pages/StadiumPage'
import EditStadiumPage from './components/pages/admin pages/EditStadiumPage';
import { StadiumGlobalProvider } from './contexts/stadiumContext/StadiumGlobalState';


 
const App =() => {
  return (
    <StadiumGlobalProvider>
    
    <Router>
      <div className="App full-width " >
          <div>
          <Switch>
            
              
            <Route exact path='/adminLogin' component={LoginAdmin} />
            <Route exact path='/' component={Home} />
            <Route exact path='/cardPage' component={CardPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={SignupPage} />
            <Route exact path='/forgetPassword' component={ForgetPassword} />
            <Route exact path='/aboutUs' component={AboutUs} />
            <Route exact path='/partnerAffiliation' component={PartnershipAffiliation} />
            <Route exact path='/termsAndConditions' component={TermsAndConditions} />
            <Route exact path='/cookiePolicy' component={CookiePolicy} />
            <Route exact path='/contactUs' component={ContactUs} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/teams' component={Teams} />
            <Route exact path='/stadiums' component={Stadiums} />
            
            
              
            
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/addEmp' component={AddEmpPage} />
            <Route exact path='/deleteEmp' component={DeleteEmpPage} />
            <Route exact path='/deleteUser' component={DeleteUserPage} />
            <Route exact path='/addGame' component={AddGamePage} />
            <Route exact path='/deleteGame' component={DeleteGamePage} />
            <Route exact path='/addTicket' component={AddTicketPage} />
            <Route exact path='/deleteTicket' component={DeleteTicketPage} />
            <Route exact path='/addStadium' component={AddStadiumPage} />
            <Route exact path='/editStadium' component={EditStadiumPage} />
            <Route exact path='/ticket' component={Ticket} />
            <Route exact path='/stadium/:stadiumId' component={StadiumPage} />

            
          </Switch>
          </div>
      </div>
    </Router>
    </StadiumGlobalProvider>
  );
}
export default App;
