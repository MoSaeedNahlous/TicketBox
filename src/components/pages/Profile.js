import React, { Fragment } from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

const Profile = () => {
    return (
        <Fragment>
            <NavBar />
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <h3>picture</h3>
                    <hr/>
                    <h5>name</h5>
                    <h5>info</h5>
                </div>
                <div className="col-md-9">
                    <h2 style={{textAlign:'center'}}>My Tickets</h2>
                    <hr/>
                    <div className="container">

                    </div>
                </div>
                </div>
                </div>
            <Footer />
        </Fragment>
    )
}

export default Profile
