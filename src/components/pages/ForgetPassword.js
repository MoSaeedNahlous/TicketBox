import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    return (
        <div class='bg-blu'>
        <div className='container bg-blu wite'>
            <div  className='' style={{marginTop:'30%'}}>
            <h1>Contact with our nearest client Service office at the moment</h1>
            <button className="btn btn-primary" style={{backgroundColor:"white",float:'center'}}>
                <Link to='/login'>
                <i class="fa fa-arrow-left" aria-hidden="true" /> Back to login
                </Link>
                </button>
                </div>
                
        </div>'</div>
    )
}

export default ForgetPassword
