import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
  Redirect,
} from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import TermsAndConditions from './components/pages/TermsAndConditions';
import './App.css';
import CookiePolicy from './components/pages/CookiePolicy';
import PartnershipAffiliation from './components/pages/PartnershipAffiliation';
import SearchPage from './components/pages/SearchPage';
import Admin from './components/pages/Admin';
import MatchPage from './components/pages/MatchPage';

import LoginAdmin from './components/pages/admin pages/LoginAdmin';
import NotFound from './components/pages/NotFound';
import AddEmpPage from './components/pages/admin pages/AddEmpPage';
import DeleteEmpPage from './components/pages/admin pages/DeleteEmpPage';
import DeleteUserPage from './components/pages/admin pages/DeleteUserPage';
import AddGamePage from './components/pages/admin pages/AddGamePage';

import AddTicketPage from './components/pages/admin pages/AddTicketPage';
import EditTicketPage from './components/pages/admin pages/EditTicketPage';
import AddStadiumPage from './components/pages/admin pages/AddStadiumPage';

import Ticket from './components/layout/admin Forms/Tickets/Ticket';
import ForgetPassword from './components/pages/ForgetPassword';
import Teams from './components/pages/Teams';
import Stadiums from './components/pages/Stadiums';
import StadiumPage from './components/pages/StadiumPage';
import TeamPage from './components/pages/TeamPage';
import EditStadiumPage from './components/pages/admin pages/EditStadiumPage';
import { StadiumGlobalProvider } from './contexts/stadiumContext/StadiumGlobalState';
import { TeamGlobalProvider } from './contexts/teamContext/TeamGlobalState';
import { GameGlobalProvider } from './contexts/gameContext/GameGlobalState';
import AddTeamPage from './components/pages/admin pages/AddTeamPage';
import EditTeamPage from './components/pages/admin pages/EditTeamPage';
import EditGamePage from './components/pages/admin pages/EditGamePage';
import { Covid19GlobalProvider } from './contexts/Covid19Tracker/Covid19GlobalState';
import Profile from './components/pages/Profile';
import { UserGlobalProvider } from './contexts/UserContext/UserGlobalState';
import PrivateUserRoute from './components/Routing/PrivateUserRoute';
import PrivateAdminRoute from './components/Routing/PrivateAdminRoute';
import PrivateDistruRoute from './components/Routing/PrivateDistruRoute';
import AddCredits from './components/pages/distru pages/AddCredits';

const App = () => {
  return (
    <UserGlobalProvider>
      <TeamGlobalProvider>
        <StadiumGlobalProvider>
          <GameGlobalProvider>
            <Covid19GlobalProvider>
              <Router>
                <div className='App full-width '>
                  <div>
                    <Switch>
                      {/* <Route exact path='/adminLogin' component={LoginAdmin} /> */}
                      <Route exact path='/' component={Home} />

                      <Route exact path='/about' component={About} />
                      <Route exact path='/login' component={LoginPage} />
                      <Route exact path='/register' component={SignupPage} />
                      <Route
                        exact
                        path='/forgetPassword'
                        component={ForgetPassword}
                      />
                      <Route exact path='/aboutUs' component={AboutUs} />
                      <Route
                        exact
                        path='/partnerAffiliation'
                        component={PartnershipAffiliation}
                      />
                      <Route
                        exact
                        path='/termsAndConditions'
                        component={TermsAndConditions}
                      />
                      <Route
                        exact
                        path='/cookiePolicy'
                        component={CookiePolicy}
                      />
                      {/* <Route path='*' component={NotFound} /> */}
                      <Route exact path='/contactUs' component={ContactUs} />
                      {/* <Route exact path='/search' component={SearchPage} /> */}
                      <Route exact path='/teams' component={Teams} />
                      <Route exact path='/stadiums' component={Stadiums} />

                      <PrivateUserRoute
                        exact
                        path='/profile'
                        component={Profile}
                      />

                      <PrivateAdminRoute
                        exact
                        path='/admin/home'
                        component={Admin}
                      />
                      <PrivateAdminRoute
                        exact
                        path='/admin/addEmp'
                        component={AddEmpPage}
                      />
                      <PrivateAdminRoute
                        exact
                        path='/admin/deleteEmp'
                        component={DeleteEmpPage}
                      />
                      <PrivateAdminRoute
                        exact
                        path='/admin/editUser'
                        component={DeleteUserPage}
                      />

                      <PrivateAdminRoute
                        exact
                        path='/admin/addGame'
                        component={AddGamePage}
                      />
                      <PrivateAdminRoute
                        exact
                        path='/admin/editGame'
                        component={EditGamePage}
                      />
                      <Route exact path='/game/:id' component={MatchPage} />

                      <PrivateAdminRoute
                        exact
                        path='/admin/addTicket'
                        component={AddTicketPage}
                      />
                      <PrivateAdminRoute
                        exact
                        path='/admin/editTicket'
                        component={EditTicketPage}
                      />
                      <PrivateAdminRoute
                        exact
                        path='/admin/addStadium'
                        component={AddStadiumPage}
                      />
                      <PrivateAdminRoute
                        exact
                        path='/admin/editStadium'
                        component={EditStadiumPage}
                      />

                      <PrivateAdminRoute
                        exact
                        path='/admin/addTeam'
                        component={AddTeamPage}
                      />
                      <PrivateAdminRoute
                        exact
                        path='/admin/editTeam'
                        component={EditTeamPage}
                      />
                      <PrivateDistruRoute
                        exact
                        path='/addCredits'
                        component={AddCredits}
                      />

                      <Route exact path='/ticket' component={Ticket} />
                      <Route
                        exact
                        path='/stadium/:stadiumId'
                        component={StadiumPage}
                      />

                      <Route exact path='/team/:id' component={TeamPage} />

                      <Route path='/404' component={NotFound} />
                      <Redirect to='/404' />
                    </Switch>
                  </div>
                </div>
              </Router>
            </Covid19GlobalProvider>
          </GameGlobalProvider>
        </StadiumGlobalProvider>
      </TeamGlobalProvider>
    </UserGlobalProvider>
  );
};
export default App;
