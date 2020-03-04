import React from 'react'
import AdminNav from '../layout/AdminNav'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import AddEmpPage from './admin pages/AddEmpPage'
import DeleteEmpPage from './admin pages/DeleteEmpPage'
import DeleteUserPage from './admin pages/DeleteUserPage'
import AddGamePage from './admin pages/AddGamePage'
import DeleteGamePage from './admin pages/DeleteGamePage'
import AddTicketPage from './admin pages/AddTicketPage'
import DeleteTicketPage from './admin pages/DeleteTicketPage'
import AddStadiumPage from './admin pages/AddStadiumPage'
import DeleteStadiumPage from './admin pages/DeleteStadiumPage'
const Admin = () => {
    return (
        <Router>
           
        <AdminNav />
        <Switch>
        
            <Route exact path='/admin/addEmp' component={AddEmpPage} />
            <Route exact path='/admin/deleteEmp' component={DeleteEmpPage} />
            <Route exact path='/admin/deleteUser' component={DeleteUserPage} />
            <Route exact path='/admin/addGame' component={AddGamePage} />
            <Route exact path='/admin/deleteGame' component={DeleteGamePage} />
            <Route exact path='/admin/addTicket' component={AddTicketPage} />
            <Route exact path='/admin/deleteTicket' component={DeleteTicketPage} />
            <Route exact path='/admin/addStadium' component={AddStadiumPage} />
            <Route exact path='/admin/deleteStadium' component={DeleteStadiumPage} />
        
        </Switch>
        
        </Router>
    )
}

export default Admin
