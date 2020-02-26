import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import Navbar from './components/layout/NavBar.js'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import './App.css';

const App =() => {
  return (
    <Router>
      <div className="App ">
        <Navbar />
          <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SignupPage} />
          </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
