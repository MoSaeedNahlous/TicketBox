import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

const ContactUs = () => {
    return (
        <div>
            <NavBar />
        <div className="container">
            <h1 >Contact us</h1>
            <br />
            <div className="row">
                <div className="col-sm-8">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quia quidem voluptatibus id nemo.
                         Dignissimos suscipit perspiciatis,
                         nam ea, vero itaque quia saepe eos unde magnam cupiditate est adipisci dolores.
                         
                    </p>
                </div>
                <div className="col-sm-4" style={{backgroundColor:'#F1F1F1'}}>
            <form>
             <div className="form-group row">
                <div className="col-sm-12">
                    <br/>
                <input type="text" className="form-control"  placeholder="Your Name" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                <input type="email" className="form-control"  placeholder="Your Email" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                <input type="text" className="form-control"  placeholder="Your Phone" />
                </div>
            </div>

            <div className="form-group">
              <textarea className="form-control" rows="5" placeholder="Your Massage"></textarea>
            </div>
           
            <div className="form-group row">
                <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
            </form>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default ContactUs
