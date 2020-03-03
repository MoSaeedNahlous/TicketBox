import React from 'react'
import AdminNav from '../layout/AdminNav'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import AddEmpPage from './admin pages/AddEmpPage'
import DeleteEmpPage from './admin pages/DeleteEmpPage'
import DeleteUserPage from './admin pages/DeleteUserPage'
import AddMatchPage from './admin pages/AddMatchPage'
import DeleteMatchPage from './admin pages/DeleteMatchPage'
import AddTicketPage from './admin pages/AddTicketPage'
import DeleteTicketPage from './admin pages/DeleteTicketPage'
import AddStadiumPage from './admin pages/AddStadiumPage'
import DeleteStadiumPage from './admin pages/DeleteStadiumPage'
const Admin = () => {
    return (
        <Router>
           
        <AdminNav />
        <Switch>
        
            <Route exact path='/admin/add-emp' component={AddEmpPage} />
            <Route exact path='/admin/delete-emp' component={DeleteEmpPage} />
            <Route exact path='/admin/delete-user' component={DeleteUserPage} />
            <Route exact path='/admin/add-match' component={AddMatchPage} />
            <Route exact path='/admin/delete-match' component={DeleteMatchPage} />
            <Route exact path='/admin/add-ticket' component={AddTicketPage} />
            <Route exact path='/admin/delete-ticket' component={DeleteTicketPage} />
            <Route exact path='/admin/add-stadium' component={AddStadiumPage} />
            <Route exact path='/admin/delete-stadium' component={DeleteStadiumPage} />
        
        </Switch>
        
        </Router>
    )
}

export default Admin
