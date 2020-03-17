import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

const ContactUs = () => {
    return (
        <div className="bg-blu wite">
            <NavBar />
        <div className="container">
            <br />
            <h1 style={{textAlign:'center'}}>Contact us</h1>
            <br />
            <div className="row">
                <div className="col-sm-8">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quia quidem voluptatibus id nemo.
                         Dignissimos suscipit perspiciatis,
                         nam ea, vero itaque quia saepe eos unde magnam cupiditate est adipisci dolores.
                         
                    </p>
                </div>
                <div className="col-sm-4" style={{backgroundColor:'rgba(0, 0, 0, 0)' ,borderStyle:'solid',borderWidth:'3px',borderColor:'#F5F3F5'}}>
            <form >
             <br/>
            <div className="form-group row">
                <div className="col-sm-12">
                <input type="email" className=" wite"  placeholder="Your Email"  style={{backgroundColor:'rgba(0, 0, 0, 0)' ,borderStyle:'solid',borderWidth:'1px',borderColor:'#F5F3F5',width:'100%'}}/>
                </div>
            </div>
            

            <div className="form-group">
              <textarea className=" wite" rows="10" placeholder="Your Massage" style={{backgroundColor:'rgba(0, 0, 0, 0)' ,borderStyle:'solid',borderWidth:'1px',borderColor:'#F5F3F5',width:'100%'}}></textarea>
            </div>
           
            <div className="form-group row">
                <div className="col-sm-10">
                <button type="submit" className="btn btn-primary" style={{float:"right"}}><i class="fa fa-envelope" aria-hidden="true"></i> Send</button>
                </div>
            </div>
            </form>
            </div>
            </div>
        </div>
        <br />
        <Footer />
        </div>
    )
}

export default ContactUs
